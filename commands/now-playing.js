const { distube } = require("../distube-client.js");
const { createNotInVoiceChannelEmbed } = require("../embeds/errors/notInVoiceChannelEmbed.js");
const { createNoQueueEmbed } = require("../embeds/errors/noQueue.js");
const { createNowPlayingEmbed } = require("../embeds/now-playing-embed.js");

module.exports = {
    name: "now-playing" ,
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
                let currentSong = queue.songs[0];
                nowPlayingEmbed = createNowPlayingEmbed(currentSong, currentSong.thumbnail, queue.songs.length);
                await message.channel.send({ embeds: [nowPlayingEmbed] });
            }
        }
        catch (e){
            console.log(e);
        }
    }
}