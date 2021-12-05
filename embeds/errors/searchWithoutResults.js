const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createSearchWithoutResultsEmbed(searchedValue) {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("No results were found for this search!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`Sorry, I couldn't find a result for \`${searchedValue}\``)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createSearchWithoutResultsEmbed: createSearchWithoutResultsEmbed,
}