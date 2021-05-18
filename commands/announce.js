const discord = require("discord.js");

module.exports.run = async (client, message, args, messageArray, prefix) => {

    // _announce title | message | colour | channel

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the permissions to do this");

    var seperator = "|";

    var usage = `Usage: ${prefix}announce **title** ${seperator} **message** ${seperator} **colour** ${seperator} **channel**`;

    if (!args[0]) return message.channel.send(usage)

    var argsList = args.join(` `).split(seperator);

    if (argsList[1] === undefined) argsList[1] = "No message provided";
    if (argsList[2] === undefined) argsList[2] = "#0000ff";
    if (argsList[3] === undefined) argsList[3] = "announcements";

    var options = {

        title: argsList[0].trim(),
        message: argsList[1].trim(),
        colour: argsList[2].trim(),
        channel: argsList[3].trim()

    }

    var annEmbed = new discord.MessageEmbed()
        .setTitle(options.title)
        .setColor(options.colour)
        .setDescription(`Message from ${message.author}
        
        ${options.message}`);
    
    var annChannel = message.guild.channels.cache.find(channel => channel.name === options.channel);

    var annPing = message.guild.roles.cache.find(role => role.name === "Announcement Ping");

    if(!annChannel) return message.channel.send("Channel couldn't be found");

    if(!annPing){
        annChannel.send(annEmbed);
    }else{
        annChannel.send(`<@&${annPing.id}>`);
    annChannel.send(annEmbed);
    }

}

module.exports.help = {

    name: "announce"

}