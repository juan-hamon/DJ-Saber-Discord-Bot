const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

function createAddEmbed(title, description, thumbnail, totalSongs){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle(title)
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(description)
        .setThumbnail(thumbnail)
        .setTimestamp()
        .setFooter(`${totalSongs} songs in the queue`);
}

module.exports = {
    createAddEmbed: createAddEmbed,
}