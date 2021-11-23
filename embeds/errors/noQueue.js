const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createNoQueueEmbed(){
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("There are no songs in the queue!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription("Please add more songs in order to show the queue.")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}
module.exports = {
    createNoQueueEmbed: createNoQueueEmbed,
}