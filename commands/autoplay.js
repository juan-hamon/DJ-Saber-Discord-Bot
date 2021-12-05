const { distube } = require("../distube-client.js");
const { createNotInVoiceChannelEmbed } = require("../embeds/errors/notInVoiceChannelEmbed.js");
const { createNoQueueEmbed } = require("../embeds/errors/noQueue.js");
const { createAutoplayEmbed } = require("../embeds/autoplay-embed.js");

module.exports = {
    name: "autoplay" ,
    description: "Turns on/off the autoplay function.",
    usage: ">autoplay",
    example: ">autoplay",
    execute: async (message) =>{
        try{
            const { channel } = message.member.voice;
            let queue = distube.getQueue(message);
            if(!channel){
                notInVoiceChannelEmbed = createNotInVoiceChannelEmbed();
                await message.channel.send({ embeds: [notInVoiceChannelEmbed] });
            }
            if(!queue){
                noQueue = createNoQueueEmbed();
                await message.channel.send({ embeds: [noQueue] });
            }
            else{
                let result = distube.toggleAutoplay(message);
                autoplayEmbed = createAutoplayEmbed(result);
                await message.channel.send({ embeds: [autoplayEmbed] });
            }
        }
        catch (e){
            console.log(e);
        }
    }
}