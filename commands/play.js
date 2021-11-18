const { distube } = require("../distube-client.js");

module.exports = {
    name: "play" ,
    execute: (message, args) =>{
        distube.play(message, args.join(" "));
        return;
    }
}