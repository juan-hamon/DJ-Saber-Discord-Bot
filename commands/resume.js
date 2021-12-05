const { distube } = require("../distube-client.js");
const { createNotInVoiceChannelEmbed } = require("../embeds/errors/notInVoiceChannelEmbed.js");
const { createResumedEmbed } = require("../embeds/resume-embed.js");
const { createAlreadyResumedEmbed } = require("../embeds/errors/alreadyResumed.js");
const { createNoSongsPlayingEmbed } = require("../embeds/errors/noSongsPlaying.js");

module.exports = {
    name: "resume",
    description: "Resumes the current song if it was paused.",
    usage: ">resume",
    example: ">resume",
    execute: async (message) =>{
        try{
            const { channel } = message.member.voice;
            if(!channel){
                notInVoiceChannelEmbed = createNotInVoiceChannelEmbed();
                return message.channel.send({ embeds: [notInVoiceChannelEmbed] });
            }else{
                let queue = distube.getQueue(message);
                let result = distube.resume(queue);
                let resumedSong = result.songs[0];
                resumedEmbed = createResumedEmbed(
                    `\`${resumedSong.name}\` was resumed.`,
                    resumedSong.thumbnail,
                    result.songs.length
                );
                await message.channel.send({ embeds: [resumedEmbed] });
            }
        }catch(e){
            if(e.errorCode === "INVALID_TYPE"){
                noSongsPlayingEmbed = createNoSongsPlayingEmbed();
                await message.channel.send({ embeds: [noSongsPlayingEmbed] });
            }
            else if(e.errorCode === "RESUMED"){
                alreadyResumedEmbed = createAlreadyResumedEmbed();
                await message.channel.send({ embeds: [alreadyResumedEmbed] });
            }
        }
    }
}