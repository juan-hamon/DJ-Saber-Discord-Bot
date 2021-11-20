const { distube } = require("../distube-client.js");
const { createNotInVoiceChannelEmbed } = require("../embeds/errors/notInVoiceChannelEmbed.js")

module.exports = {
    name: "play" ,
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