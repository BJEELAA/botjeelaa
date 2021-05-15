const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args, messageArray, prefix) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, but you don't have the correct permissions to do this");
    if (!message.mentions.members.first()) return message.channel.send(`Usage: ${prefix}clearwarns <@person>`);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Seems like I don't have the necessary permissions to do this");

    var person = message.mentions.members.first();
    var personWarns = warns[person.id].warns;

    if (!person) return message.channel.send("Couldn't find user");

    if (warns[person.id].warns == 0) return message.channel.send(`${person.user.tag} doesn't have any warnings`);

    message.channel.send(`${person.user.tag} has ${personWarns} warnings`);

}

module.exports.help = {

    name: "warnings"

}