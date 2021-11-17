const { Client, Intents } = require('discord.js');
const Distube = require("distube");

require('dotenv').config()

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
    restTimeOffset: 0,
    presence: {
        status: "dnd",
        activities:[{
            name: "DJ Saber",
            type: "PLAYING"
        }]
    }
});

const distube = new Distube.DisTube(client,{
    emitNewSongOnly: false,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    leaveOnStop: true,
    youtubeDL: true,
    updateYouTubeDL: true
})

const prefix = ">";

client.login(process.env.TOKEN);

client.on("ready", ()=>{
    console.log(`${client.user.tag} Is online`)
})

client.on("messageCreate", (message) =>{
    if(!message.guild){
        return;
    }
    if(message.author.bot){
        return;
    }
    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift()
    if(command === "ping"){
        return message.reply(`${client.ws.ping} ms`);
    }
    else if(command === "play"){
        distube.play(message, args.join(" "));
        return;
    }
    else if(command === "stop"){
        distube.stop(message);
        return message.reply("MUSIC STOPED")
    }
    else if(command === "skip"){
        distube.skip(message);
        return message.reply("MUSIC SKIPPED")
    }
})

distube.on("playSong", (queue, song) =>{
    queue.textChannel.send(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`);
})

distube.on("addSong", (queue, song) =>{
    queue.textChannel.send(`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}.`);
})

distube.on("error", (channel, error) => {
    console.log(error);
    channel.send("An error encountered: " + error);
});