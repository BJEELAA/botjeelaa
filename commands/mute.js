const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args, messageArray, prefix) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, but you don't have the correct permissions to do this");
    if (!message.mentions.members.first()) return message.channel.send(`Usage: ${prefix}mute <@person> <time> <reason>`);
    if (!args[1]) return message.channel.send(`Usage: ${prefix}mute <@person> <time> <reason>`);
    if (!args[2]) return message.channel.send(`Usage: ${prefix}mute <@person> <time> <reason>`);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Seems like I don't have the necessary permissions to do this");

    var reason = args.slice(2).join(" ")
    var muteUser = message.mentions.members.first();

    if (!muteUser) return message.channel.send("Couldn't find user");

    if (muteUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't mute moderators");

    var muteRole = message.guild.roles.cache.find(role => role.name === "muted");
    if (!muteRole) return message.channel.send("Please make sure you have a role called \"muted\"");

    var muteTime = args[1];


    var embedMute = new discord.MessageEmbed()
        .setTitle(`**Mute**`)
        .setColor("#ff0000")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Muted: ** ${muteUser.user.tag} (${muteUser.user.id})
        **Muted by: ** ${message.author}
        **Time: ** ${muteTime}
        **Reason: ** ${reason}`);

    var embedUnmute = new discord.MessageEmbed()
        .setTitle(`**Unmute**`)
        .setColor("#00ff00")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Unmuted: ** ${muteUser.user.tag} (${muteUser.user.id}`);


    var muteChannel = message.guild.channels.cache.find(channel => channel.name === "mod-actions") || message.channel;

    await (muteUser.roles.add(muteRole.id));
    message.channel.send(`Succesfully muted ${muteUser.user.tag}   **Duration: ** ${muteTime}   **Reason: ** ${reason}`);
    muteChannel.send(embedMute);
    muteUser.send(`You have been muted for **${muteTime}**\n**Reason: ** ${reason}`);

    setTimeout(() => {

        muteUser.roles.remove(muteRole.id);
        muteChannel.send(embedUnmute);
        muteUser.send(`You have been unmuted`);

    }, ms(muteTime));

}

module.exports.help = {

    name: "mute"

}