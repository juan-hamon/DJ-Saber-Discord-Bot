const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createAlreadyResumedEmbed() {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Already resumed the song!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription("The song was already resumed, so I can't do it again.")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createAlreadyResumedEmbed: createAlreadyResumedEmbed,
}