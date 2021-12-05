const { distube } = require("../distube-client.js");
const { createNotInVoiceChannelEmbed } = require("../embeds/errors/notInVoiceChannelEmbed.js");
const { createNoArgsInCommandEmbed } = require("../embeds/errors/noArgsInCommand.js");
const { createNoQueueEmbed } = require("../embeds/errors/noQueue.js");
const { createInvalidLoopStateEmbed } = require("../embeds/errors/invalidLoopState.js");
const { createLoopEmbed } = require("../embeds/loop-embed.js");

module.exports = {
    name: "loop" ,
    description: "Activates the loop mode on for song or queue, or deactivates it.",
    usage: ">loop \`<loop_type>\`",
    example: ">loop song | >loop queue | >loop off",
    execute: async (message, args) =>{
        try{
            const { channel } = message.member.voice;
            let queue = distube.getQueue(message);
            if(!channel){
                notInVoiceChannelEmbed = createNotInVoiceChannelEmbed();
                await message.channel.send({ embeds: [notInVoiceChannelEmbed] });
            }if(!args[0]){
                noArgsInCommand = createNoArgsInCommandEmbed("loop");
                await message.channel.send({ embeds: [noArgsInCommand] });
            }
            if(!queue){
                noQueue = createNoQueueEmbed();
                await message.channel.send({ embeds: [noQueue] });
            }
            else{
                let state = args[0].toString();
                let numState = 0;
                if(state.toLowerCase() === "song"){
                    numState = 1;
                }else if(state.toLowerCase() === "queue"){
                    numState = 2;
                }else if(state.toLowerCase() === "off"){
                    numState = 0;
                }else{
                    invalidLoopStateEmbed = createInvalidLoopStateEmbed(state.toLowerCase());
                    await message.channel.send({ embeds: [invalidLoopStateEmbed] });
                    return;
                }
                distube.setRepeatMode(message, numState);
                loopEmbed = createLoopEmbed(state.toUpperCase());
                await message.channel.send({ embeds: [loopEmbed] });
            }
        }
        catch (e){
            console.log(e);
        }
    }
}