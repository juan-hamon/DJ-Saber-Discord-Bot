const { createHelpEmbed } = require("../embeds/help-embed.js");
const { createCommandDoesNotExistEmbed } =  require("../embeds/errors/commandDoesNotExist.js");
const fs = require('fs');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js') && file != "help.js");

const commands = new Map();

for (const file of commandFiles){
    const command = require(`./${file}`);
    commands.set(
        command.name, 
        {
            command_description: command.description,
            command_usage: command.usage,
            command_example: command.example,
        }
    )
}

module.exports = {
    name: "help",
    description: "Displays all information for a specific command or for all registered commands.",
    usage: ">help \`[command_name]\`",
    example: ">help | >help volume",
    execute: async (message, args) => {
        let result = "";
        if(!args[0]){
            let helpEmbed = createHelpEmbed(true, undefined);
            for (let [key, value] of commands.entries()) {
                result = `- **Description:** ${value.command_description}\n - **Usage:** ${value.command_usage} \n - **Example:** ${value.command_example} \n`;
                helpEmbed.addField(`${key.toUpperCase()} command`, result);
            }
            await message.channel.send({ embeds: [helpEmbed] })
                .then(msg =>{
                    setTimeout(() => {
                        msg.delete();
                        message.delete();
                    }, 15000);
            });
        }else{
            let cmd_name = args[0].toLowerCase();
            let cmd = commands.get(cmd_name);
            if(cmd != undefined){
                let helpEmbed = createHelpEmbed(false, cmd_name.toUpperCase());
                helpEmbed.addField("Description", cmd.command_description);
                helpEmbed.addField("Usage", cmd.command_usage);
                helpEmbed.addField("Example", cmd.command_example);
                message.channel.send({ embeds: [helpEmbed] })
                    .then(msg =>{
                        setTimeout(() => {
                            msg.delete();
                            message.delete();
                        }, 15000);
                    });
            }else{
                let notFoundCommandEmbed = createCommandDoesNotExistEmbed(cmd_name.toUpperCase());
                await message.channel.send({ embeds: [notFoundCommandEmbed] });
            }
            
        }
    }
}