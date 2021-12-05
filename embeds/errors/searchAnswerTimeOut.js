const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createSearchAnswerTimeOutEmbed(maxTime) {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Response time out!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`You have surpassed the time limit to respond, remember that you have ${maxTime} seconds to respond.`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createSearchAnswerTimeOutEmbed: createSearchAnswerTimeOutEmbed,
}