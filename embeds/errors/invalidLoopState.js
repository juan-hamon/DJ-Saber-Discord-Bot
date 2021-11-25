const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createInvalidLoopStateEmbed(invalidSate) {
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Invalid loop state!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`${invalidSate} is not a valid state, please use: \`song\`/\`queue\`/\`off\`.`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createInvalidLoopStateEmbed: createInvalidLoopStateEmbed,
}