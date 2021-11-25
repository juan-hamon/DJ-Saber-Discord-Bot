const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

function createLoopEmbed(loopMode){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle("Loop mode changed!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`The loop mode has been setted to ${loopMode}.`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createLoopEmbed: createLoopEmbed,
}