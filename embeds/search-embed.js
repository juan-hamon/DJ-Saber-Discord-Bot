const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

function createSearchEmbed(args, results){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle(`Search results for \`${args}\``)
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(results)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createSearchEmbed: createSearchEmbed,
}