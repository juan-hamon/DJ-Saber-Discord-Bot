const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createNoNextSongToSkipEmbed(){
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("It's not possible to skip")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription("There are no songs left to skip, please add more songs.")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}
module.exports = {
    createNoNextSongToSkipEmbed: createNoNextSongToSkipEmbed,
}