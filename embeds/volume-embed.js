const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

function createVolumeEmbed(volume){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle("Volume changed!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`The volume has been setted to ${volume}%.`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createVolumeEmbed: createVolumeEmbed,
}