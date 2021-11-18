const { distube } = require("../distube-client.js");

module.exports = {
    name: "stop" ,
    execute: (message) =>{
        distube.stop(message);
        return message.reply("MUSIC STOPED")
    }
}