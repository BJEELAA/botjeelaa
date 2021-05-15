const discord = require("discord.js");

module.exports.run = async(client, message, args, messageArray) =>{

    // _warn @member reason

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, but you don't have the correct permissions to do this");
    if (!message.mentions.members.first()) return message.reply(`Usage: ${prefix}warn <@person> <reason>`);
    if (args.length < 2) return message.reply(`Usage: ${prefix}warn <@person> <reason>`);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Seems like I don't have the necessary permissions to do this");
   
    var warnUser = message.mentions.members.first();

    var reason = args.slice(1).join(" ");

    if(!warnUser) return message.channel.send("Couldn't find user");

    if(warnUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't warn moderators");

}

module.exports.help = {

    name: "warn"

}