const { distube } = require("../distube-client.js");
const { createNotInVoiceChannelEmbed } = require("../embeds/errors/notInVoiceChannelEmbed.js")

module.exports = {
    name: "play" ,
    description: "Adds a song in the queue, if there are no songs, starts playing the song immediately.",
    usage: ">play \`<song_name_or_url>\`",
    example: ">play In the end | >play www.youtube.com/watch?v=eVTXPUF4Oz4",
    execute: async (message, args) =>{
        try{
            const { channel } = message.member.voice;
            if(!channel){
                notInVoiceChannelEmbed = createNotInVoiceChannelEmbed();
                return message.channel.send({ embeds: [notInVoiceChannelEmbed] });
            }else{
                await distube.play(message, args.join(" "));
            }
        }
        catch (e){
            console.log(e);
        }
    }
}