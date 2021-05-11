const discord = require("discord.js");

module.exports.run = async (client, message, args, messageArray) => {

    let ts = new Date().getTime();
    a = "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp="+ts
    message.channel.send(a);

}

module.exports.help = {

    name: "cat"

}