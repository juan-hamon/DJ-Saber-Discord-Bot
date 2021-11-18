const Distube = require("distube");
const { client } = require("./bot.js");
const { MessageEmbed } = require('discord.js');

const distube = new Distube.DisTube(client,{
    emitNewSongOnly: false,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    leaveOnStop: true,
    youtubeDL: true,
    updateYouTubeDL: true
})

function createEmbed(title, description, totalSongs){
    return new MessageEmbed()
        .setColor("#e80761")
        .setTitle(title)
        .setAuthor("DJ Saber", client.user.avatarURL())
        .setDescription(description)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter(`${totalSongs} songs in the queue`);
}

distube.on("playSong", (queue, song) =>{
    embed = createEmbed(
        `Playing ${song.name}`, 
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`,
        queue.songs.length
    );
    queue.textChannel.send({ embeds: [embed] });
})

distube.on("addSong", (queue, song) =>{
    embed = createEmbed(
        `Added ${song.name}`,
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}.`,
        queue.songs.length
    );
    queue.textChannel.send({ embeds: [embed] });
})

distube.on("error", (channel, error) => {
    console.log(error);
    channel.send("An error encountered: " + error);
});

module.exports = {
    distube: distube,
}