const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

function createHelpEmbed(multiCommand, commandName){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle(multiCommand ? "Commands information": `${commandName} command information`)
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createHelpEmbed: createHelpEmbed,
}