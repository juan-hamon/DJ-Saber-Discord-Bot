const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

function createQueueEmbed(message){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle(`Current queue for: ${message.guild.name}`)
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
}

module.exports = {
    createQueueEmbed: createQueueEmbed,
}