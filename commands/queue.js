const { distube } = require("../distube-client.js");
const { createQueueEmbed } = require("../embeds/queue-embed.js");
const { createNoQueueEmbed } = require("../embeds/errors/noQueue.js");

module.exports = {
    name: "queue" ,
    description: "Show the songs in the queue (up to 25 songs are displayed) and other information.",
    usage: ">queue",
    example: ">queue",
    execute: async (message) =>{
        let queue = distube.getQueue(message);
        if(!queue){
            noQueue = createNoQueueEmbed();
            await message.channel.send({ embeds: [noQueue] });
        }
        else{
            queueEmbed = createQueueEmbed(message);
            let cont = 1;
            let songs = queue.songs;
            for(let i = 0; i < queue.songs.length; i++){
                let songName = songs[i].name;
                let songDuration = songs[i].formattedDuration;
                let user = songs[i].user;
                queueEmbed.addField(`${cont}) ${songName} - ${songDuration}`,`Requested by ${user}`);
                cont++;
            }
            await message.channel.send({ embeds: [queueEmbed] });
        }
    }
}