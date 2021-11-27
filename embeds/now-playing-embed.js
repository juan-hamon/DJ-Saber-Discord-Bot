const { MessageEmbed } = require('discord.js');
const { client } = require("../bot.js");

var numberFormat = new Intl.NumberFormat('es-ES');

function createNowPlayingEmbed(song, thumbnail, totalSongs){
    let formatedViews = numberFormat.format(song.views);
    let formatedLikes = numberFormat.format(song.likes);
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle(`Now playing :notes: ${song.name}`)
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setThumbnail(thumbnail)
        .addField("Views", `:arrow_forward: ${formatedViews}`, true)
        .addField("Likes", `:thumbsup: ${formatedLikes}`, true)
        .addField("Duration", `\`${song.formattedDuration}\``, true)
        .setTimestamp()
        .setFooter(`${totalSongs} songs in the queue`);
}

module.exports = {
    createNowPlayingEmbed: createNowPlayingEmbed,
}