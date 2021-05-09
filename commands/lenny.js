const discord = require("discord.js");

module.exports.run = async(client, message, args, messageArray) =>{

    message.delete();
    return message.channel.send(message.author.username + ": ( ͡° ͜ʖ ͡°)");

}

module.exports.help = {

    name: "lenny"

}