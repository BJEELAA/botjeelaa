const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, args, messageArray, prefix) =>{

    try{

        var helpMsg = `✨**BOTJEELAA**✨\n\n**__Commands__**\n${prefix}botstatus - Gives info about the bot\n${prefix}cat - Gives a funny/cute cat picture\n${prefix}dm <id> <message> - DM a certain message to someone\n${prefix}funfact [nr] - Tells user a random fun fact\n${prefix}help - Sends this message\n${prefix}leerkracht <last name> - Gives info about one of my teachers\n${prefix}lenny - Sends a lenny face\n${prefix}rps <rock/paper/scissors> - Play rock paper scissors with bot\n${prefix}kick <@user> <reason> - Kick mentioned user\n${prefix}ban <@user> <reason> - Ban mentioned user\n\n**__Features__**\nWhen the bot receives a DM, it automatically logs the DM in channel #logjeelaa`;
        message.author.send(helpMsg);

        message.channel.send("Sent the help message to your DMs");

    }catch(error){
        message.reply("Something went wrong, if this keeps happening, ask an admin to make sure I have the correct permissions\nIf that doesn't fix it, shoot me (bjeelaa#6666) a quick DM and I'll get the issue fixed!");
    }

}

module.exports.help = {

    name: "help"

}