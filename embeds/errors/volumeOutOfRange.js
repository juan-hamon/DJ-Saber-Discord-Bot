const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createVolumeOutOfRagneEmbed() {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("The volume is out of range!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription("The value is out of range, remember that the volume goes from 0 to 200%.")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createVolumeOutOfRagneEmbed: createVolumeOutOfRagneEmbed,
}