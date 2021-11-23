const { distube } = require("../distube-client.js");
const { createNotInVoiceChannelEmbed } = require("../embeds/errors/notInVoiceChannelEmbed.js");
const { createPauseEmbed } = require("../embeds/pause-embed.js");
const { createAlreadyPausedEmbed } =  require("../embeds/errors/alreadyPaused.js");
const { createNoSongsPlayingEmbed } = require("../embeds/errors/noSongsPlaying.js");

module.exports = {
    name: "pause",
    execute: async (message) =>{
        try{
            const { channel } = message.member.voice;
            if(!channel){
                notInVoiceChannelEmbed = createNotInVoiceChannelEmbed();
                return message.channel.send({ embeds: [notInVoiceChannelEmbed] });
            }else{
                let queue = distube.getQueue(message);
                let result = distube.pause(queue);
                let pausedSong = result.songs[0];
                pauseEmbed = createPauseEmbed(
                    `\`${pausedSong.name}\` was paused.`,
                    pausedSong.thumbnail,
                    result.songs.length
                );
                await message.channel.send({ embeds: [pauseEmbed] });
            }
        }catch(e){
            if(e.errorCode === "INVALID_TYPE"){
                noSongsPlayingEmbed = createNoSongsPlayingEmbed();
                await message.channel.send({ embeds: [noSongsPlayingEmbed] });
            }
            else if(e.errorCode === "PAUSED"){
                alreadyPausedEmbed = createAlreadyPausedEmbed();
                await message.channel.send({ embeds: [alreadyPausedEmbed] });
            }
        }
    }
}