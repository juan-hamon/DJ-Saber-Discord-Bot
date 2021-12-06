const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createCommandDoesNotExistEmbed(command) {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("The specified command does not exist!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`The command ${command}, does not exist. Please use the help command to see the valid commands.`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createCommandDoesNotExistEmbed: createCommandDoesNotExistEmbed,
}