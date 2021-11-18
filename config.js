require('dotenv').config()

module.exports = {
    token: process.env.TOKEN,
    guildId: process.env.GUILD_ID,
    clientId: process.env.CLIENT_ID,
    prefix: process.env.PREFIX
}