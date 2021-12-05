const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createSearchSelectionInvalidTypeEmbed(maxValue) {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("The selected option is not a number!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`The value is not a number, remember that the selection must be a number between 1 and ${maxValue}.`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createSearchSelectionInvalidTypeEmbed: createSearchSelectionInvalidTypeEmbed,
}