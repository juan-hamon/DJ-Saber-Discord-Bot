const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

function createResumedEmbed(description, thumbnail, totalSongs){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle("Song resumed!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(description)
        .setThumbnail(thumbnail)
        .setTimestamp()
        .setFooter(`${totalSongs} songs in the queue`);
}

module.exports = {
    createResumedEmbed: createResumedEmbed,
}