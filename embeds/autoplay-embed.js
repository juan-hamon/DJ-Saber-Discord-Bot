const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

function createAutoplayEmbed(result){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle("Autoplay mode changed!")
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(`The autoplay is now ${result ? "\`ON\`" : "\`OFF\`"}.`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
}

module.exports = {
    createAutoplayEmbed: createAutoplayEmbed,
}