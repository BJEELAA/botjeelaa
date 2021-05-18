const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args, messageArray, prefix) => {

    // _warn @member reason

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, but you don't have the correct permissions to do this");
    if (!message.mentions.members.first()) return message.reply(`Usage: ${prefix}warn <@person> <reason>`);
    if (args.length < 2) return message.reply(`Usage: ${prefix}warn <@person> <reason>`);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Seems like I don't have the necessary permissions to do this");

    var warnUser = message.mentions.members.first();
    var dmUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.channel.send("Couldn't find user");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't warn moderators");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embedWarn = new discord.MessageEmbed()
        .setTitle(`**Warn**`)
        .setColor("#ff0000")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Warned: ** ${warnUser.user.tag} (${warnUser.user.id})
        **Warned by: ** ${message.author}
        **Reason: ** ${reason}
        **Warn amount: ** ${warns[warnUser.id].warns}`);
    
    message.channel.send("User succesfully warned");

    message.mentions.members.first().send(`You have been warned for: **${reason}**\nTotal amount of warns: **${warns[warnUser.id].warns}**`);
    var warnChannel = message.guild.channels.cache.find(channel => channel.name === "mod-actions") || message.channel;
    warnChannel.send(embedWarn);
    
}

module.exports.help = {

    name: "warn"

}