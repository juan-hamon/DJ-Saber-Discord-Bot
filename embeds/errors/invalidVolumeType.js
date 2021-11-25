const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createInvalidVolumeTypeEmbed() {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Invalid type for volume value!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription("The volume value must be a number from 0 to 200.")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createInvalidVolumeTypeEmbed: createInvalidVolumeTypeEmbed,
}