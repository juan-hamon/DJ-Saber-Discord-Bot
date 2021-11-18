const { Client, Intents } = require('discord.js');

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

module.exports = {
    client: client,
}