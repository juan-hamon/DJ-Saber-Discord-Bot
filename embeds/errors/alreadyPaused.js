const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createAlreadyPausedEmbed() {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Already paused the song!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription("The song is already paused, so I can't do it again.")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createAlreadyPausedEmbed: createAlreadyPausedEmbed,
}