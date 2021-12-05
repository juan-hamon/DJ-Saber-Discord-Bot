const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createSearchSelectionOutOfRangeEmbed(maxValue) {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("The selected option is out of range!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`The value is out of range, remember that the options range from 1 to ${maxValue}.`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createSearchSelectionOutOfRangeEmbed: createSearchSelectionOutOfRangeEmbed,
}