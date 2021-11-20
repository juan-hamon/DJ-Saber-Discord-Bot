const Distube = require("distube");
const { client } = require("./bot.js");
const { createPlayEmbed } = require("./embeds/play-embed.js")
const { createAddEmbed } = require("./embeds/add-embed.js")

const distube = new Distube.DisTube(client,{
    emitNewSongOnly: false,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    leaveOnStop: true,
    youtubeDL: true,
    updateYouTubeDL: true
})

distube.on("playSong", (queue, song) =>{
    embed = createPlayEmbed(
        `Playing ${song.name}`, 
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`,
        song.thumbnail,
        queue.songs.length
    );
    queue.textChannel.send({ embeds: [embed] });
})

distube.on("addSong", (queue, song) =>{
    embed = createAddEmbed(
        `Added ${song.name}`,
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}.`,
        song.thumbnail,
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