const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

function createSkipEmbed(message){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle("Song skipped!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`The current song was skipped by ${message.member.user}`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createSkipEmbed: createSkipEmbed,
}