const { distube } = require("../distube-client.js");
const { createNotInVoiceChannelEmbed } = require("../embeds/errors/notInVoiceChannelEmbed.js");
const { createSkipEmbed } = require("../embeds/skip-embed.js");
const { createNoNextSongToSkipEmbed } = require("../embeds/errors/noNextSongToSkip");

module.exports = {
    name: "skip" ,
    execute: async (message) =>{
        try{
            const { channel } = message.member.voice;
            if(!channel){
                notInVoiceChannelEmbed = createNotInVoiceChannelEmbed();
                return message.channel.send({ embeds: [notInVoiceChannelEmbed] });
            }
            else{
                await distube.skip(message);
                embed = createSkipEmbed(message);
                return message.channel.send({ embeds: [embed] });
            }
        }catch(e){
            if(e.errorCode === "NO_UP_NEXT"){
                noNextSongToSkipEmbed = createNoNextSongToSkipEmbed();
                return message.channel.send({ embeds: [noNextSongToSkipEmbed] });
            }
        }
    }
}