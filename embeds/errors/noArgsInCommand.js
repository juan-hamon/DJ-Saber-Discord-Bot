const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createNoArgsInCommandEmbed(command) {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("You need to provide arguments to use this command!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`In order to use \`${command}\` command you need to suply arguments, please use the \`help\` command to get more information.`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createNoArgsInCommandEmbed: createNoArgsInCommandEmbed,
}