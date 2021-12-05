const { distube } = require("../distube-client.js");
const { createNotInVoiceChannelEmbed } = require("../embeds/errors/notInVoiceChannelEmbed.js");
const { createStopEmbed } = require("../embeds/stop-embed.js");
const { createNoSongsPlayingEmbed } = require("../embeds/errors/noSongsPlaying.js")

module.exports = {
    name: "stop" ,
    description: "Stops the current queue.",
    usage: ">stop",
    example: ">stop",
    execute: async (message) =>{
        try{
            const { channel } = message.member.voice;
            if(!channel){
                notInVoiceChannelEmbed = createNotInVoiceChannelEmbed();
                return message.channel.send({ embeds: [notInVoiceChannelEmbed] });
            }else{
                await distube.stop(message);
                stopEmbed = createStopEmbed(message);
                return message.channel.send({ embeds: [stopEmbed] });
            }
        }catch (e){
            if(e.errorCode === "NO_QUEUE"){
                noSongsPlayingEmbed = createNoSongsPlayingEmbed();
                return message.channel.send({ embeds: [noSongsPlayingEmbed] });
            }
        }
    }
}