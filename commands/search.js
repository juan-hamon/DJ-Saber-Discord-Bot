const { distube } = require("../distube-client.js");
const { createNoArgsInCommandEmbed } = require("../embeds/errors/noArgsInCommand.js");
const { createSearchEmbed } =  require("../embeds/search-embed.js");
const { createSearchSelectionOutOfRangeEmbed } = require("../embeds/errors/searchSelectionNumberOutOfRange.js");
const { createSearchSelectionInvalidTypeEmbed } = require("../embeds/errors/searchSelectionInvalidType.js");
const { createSearchAnswerTimeOutEmbed } = require("../embeds/errors/searchAnswerTimeOut.js");
const { createSearchWithoutResultsEmbed } = require("../embeds/errors/searchWithoutResults.js");

module.exports = {
    name: "search" ,
    description: "Search a song or playlist in order to add it to the queue. Use \`-p\` if you are searching a playlist, if not provided I will search a song.",
    usage: ">search \`<song_or_playlist_name>\` \`[type_search]\`",
    example: ">search In the end | >search Meteora Likin Park -p",
    execute: async (message, args) =>{
        let searchPlaylist = args.indexOf("-p") != -1 ? true : false;
        if(searchPlaylist){
            args.splice(args.indexOf("-p"), 1);
        }
        if(!args[0]){
            noArgsInCommand = createNoArgsInCommandEmbed("search");
            await message.channel.send({ embeds: [noArgsInCommand] });
        }
        else{
            try{
                let searchType = searchPlaylist ? "playlist" : "video";
                let result = await distube.search(args.join(" "),{type: searchType});
                let resultString = "";
                let topSearchValue = 10;
                for(let i = 0; i < topSearchValue; i++){
                    try{
                        if(searchPlaylist){
                            resultString += `**${i+1})** \`${result[i].name}\` (${result[i].url}) \n`;
                        }else{
                            resultString += `**${i+1})** \`${result[i].name}\` (${result[i].url}) - \`${result[i].formattedDuration}\` \n`;
                        }
                    }catch(e){
                        resultString += "\n";
                    }
                }
                let searchEmbed = createSearchEmbed(args.join(" "), resultString);
                let responseTime = 10;
                let msg_filter = m => m.author.id === message.author.id;
                message.channel.send({ embeds: [searchEmbed] })
                    .then(() => {
                        message.channel.awaitMessages({filter: msg_filter, max: 1, time: responseTime * 1000, errors: ['time']})
                            .then(collected => {
                                let userAnswer = collected.first().content;
                                if(Number(userAnswer) <= 0 || Number(userAnswer) > topSearchValue){
                                    outOfRangeEmbed = createSearchSelectionOutOfRangeEmbed(topSearchValue);
                                    message.channel.send({ embeds: [outOfRangeEmbed] });
                                }else if(Number.isNaN(Number(userAnswer))){
                                    invalidAnswerEmbed = createSearchSelectionInvalidTypeEmbed(topSearchValue);
                                    message.channel.send({ embeds: [invalidAnswerEmbed] });
                                }
                                else{
                                    distube.play(message, result[userAnswer - 1].url);
                                }
                            }).catch( () => {
                                timeOutEmbed = createSearchAnswerTimeOutEmbed(responseTime);
                                message.channel.send({ embeds: [timeOutEmbed] });
                            })
                    }).catch(e => {
                        console.log(e);
                    });
            }catch(e){
                if(e.errorCode === "NO_RESULT"){
                    noResultsEmbed = createSearchWithoutResultsEmbed(args.join(" "));
                    message.channel.send({ embeds: [noResultsEmbed] });
                }
            }
        }
        
    }
}