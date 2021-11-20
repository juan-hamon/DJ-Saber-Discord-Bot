const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createNoSongsPlayingEmbed() {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("No songs in the queue")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription("Please add songs in order to stop or skip them.")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createNoSongsPlayingEmbed: createNoSongsPlayingEmbed,
}