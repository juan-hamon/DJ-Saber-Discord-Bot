const { distube } = require("../distube-client.js");

module.exports = {
    name: "skip" ,
    execute: (message) =>{
        distube.skip(message);
        return message.reply("SONG SKIPPED")
    }
}