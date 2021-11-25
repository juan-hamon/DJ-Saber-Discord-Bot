const { distube } = require("../distube-client.js");
const { createNotInVoiceChannelEmbed } = require("../embeds/errors/notInVoiceChannelEmbed.js");
const { createNoArgsInCommandEmbed } = require("../embeds/errors/noArgsInCommand.js");
const { createNoQueueEmbed } = require("../embeds/errors/noQueue.js");
const { createVolumeOutOfRagneEmbed } = require("../embeds/errors/volumeOutOfRange.js");
const { createVolumeEmbed } = require("../embeds/volume-embed.js");
const { createInvalidVolumeTypeEmbed } = require("../embeds/errors/invalidVolumeType.js");

module.exports = {
    name: "volume" ,
    execute: async (message, args) =>{
        try{
            const { channel } = message.member.voice;
            let queue = distube.getQueue(message);
            if(!channel){
                notInVoiceChannelEmbed = createNotInVoiceChannelEmbed();
                await message.channel.send({ embeds: [notInVoiceChannelEmbed] });
            }if(!args[0]){
                noArgsInCommand = createNoArgsInCommandEmbed("volume");
                await message.channel.send({ embeds: [noArgsInCommand] });
            }
            if(!queue){
                noQueue = createNoQueueEmbed();
                await message.channel.send({ embeds: [noQueue] });
            }
            else{
                let volume = Number(args[0]);
                if(0 < volume && volume > 200){
                    volumeOutOfRangeEmbed = createVolumeOutOfRagneEmbed();
                    await message.channel.send({ embeds: [volumeOutOfRangeEmbed] });
                    return;
                }
                distube.setVolume(message, volume);
                volumeEmbed = createVolumeEmbed(volume);
                await message.channel.send({ embeds: [volumeEmbed] });
            }
        }
        catch (e){
            if(e.errorCode === "INVALID_TYPE"){
                invalidVolumeTypeEmbed = createInvalidVolumeTypeEmbed();
                await message.channel.send({ embeds: [invalidVolumeTypeEmbed] });
            }
        }
    }
}