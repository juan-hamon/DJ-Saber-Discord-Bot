const { client } = require("./bot.js");
const { token, prefix } = require("./config.js");
const { createCommandDoesNotExistEmbed } = require("./embeds/errors/commandDoesNotExist.js");
const fs = require('fs');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const commands = new Map();

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    commands.set(command.name, command.execute);
}

client.login(token);

client.on("ready", ()=>{
    console.log(`${client.user.tag} Is online`)
});

client.on("messageCreate", async (message) =>{
    if(!message.guild){
        return;
    }
    if(message.author.bot){
        return;
    }
    if(!message.content.includes(prefix)){
        return;
    }
    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift();
    const func = commands.get(command);
    if(func != undefined){
        await func(message, args);
    }else{
        let notFoundCommandEmbed = createCommandDoesNotExistEmbed(command.toUpperCase());
        await message.channel.send({ embeds: [notFoundCommandEmbed] });
    }
});