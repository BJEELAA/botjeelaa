const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(client, message, args, messageArray) =>{

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, but you don't have the correct permissions to do this");
    if (!message.mentions.members.first()) return message.reply(`Usage: ${prefix}mute <@person> <time>`);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Seems like I don't have the necessary permissions to do this");

    var muteUser = message.mentions.members.first();

    if (!muteUser) return message.channel.send("Couldn't find user");

    if (muteUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't mute moderators");

}

module.exports.help = {

    name: "tempmute"

}