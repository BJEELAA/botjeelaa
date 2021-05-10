const discord = require("discord.js");

module.exports.run = async(client, message, args, messageArray) =>{

    message.channel.send("epic");

}

module.exports.help = {

    name: "test"

}