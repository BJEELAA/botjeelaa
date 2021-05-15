const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args, messageArray, prefix) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, but you don't have the correct permissions to do this");
    if (!message.mentions.members.first()) return message.channel.send(`Usage: ${prefix}clearwarns <@person>`);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Seems like I don't have the necessary permissions to do this");

    var person = message.mentions.members.first();

    if (!person) return message.channel.send("Couldn't find user");

    if (person.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't clear moderator's warnings");

    if (warns[person.id].warns == 0) return message.channel.send(`${person.user.tag} doesn't have any warnings`);

    var personWarns = warns[person.id].warns;
    warns[person.id].warns = 0;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embedClear = new discord.MessageEmbed()
        .setTitle(`**Clearwarns**`)
        .setColor("#00ff00")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Cleared warns of: ** ${person.user.tag} (${person.user.id})
        **Warns cleared by: ** ${message.author}
        **Amount of warns cleared: ** ${personWarns}`);

    var clearChannel = client.channels.cache.find(channel => channel.name === "mod-actions") || message.channel;
    clearChannel.send(embedClear);
    message.channel.send(`Succesfully cleared all of ${person}'s warnings (${personWarns})`);
    message.mentions.members.first().send(`Your ${personWarns} warning(s) have been removed by ${message.author.tag}`);

}

module.exports.help = {

    name: "clearwarns"

}