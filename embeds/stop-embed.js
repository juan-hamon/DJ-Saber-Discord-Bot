const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

function createStopEmbed(message){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle("Queue stoped!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`The music has stopped by ${message.member.user}`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createStopEmbed: createStopEmbed,
}