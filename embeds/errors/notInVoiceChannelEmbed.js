const { MessageEmbed } = require('discord.js');
const { client } = require("../../bot.js");

function createNotInVoiceChannelEmbed(){
    return new MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Not in voice channel")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription("Please join to the voice channel in order to execute the command.")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}
module.exports = {
    createNotInVoiceChannelEmbed: createNotInVoiceChannelEmbed,
}