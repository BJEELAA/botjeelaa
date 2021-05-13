const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, messageArray, prefix) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you don't have the necessary permissions to do this.");

    if (!args[0]) return message.channel.send(`Usage: ${prefix}clear <amount>`);

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;
        message.channel.bulkDelete(amount).then(() => {
            if (args[0] <= 0) message.channel.send("Can't really delete anything under 1 message, can I?").then(msg => msg.delete({ timeout: 3000 }));
            if (args[0] == 1) message.channel.send("Deleted 1 message").then(msg => msg.delete({ timeout: 3000 }));
            if (args[0] >= 2) message.channel.send(`Deleted ${args[0]} messages`).then(msg => msg.delete({ timeout: 3000 }));
        })

    } else return message.channel.send(`Usage: ${prefix}clear <amount> (Amount has to be a number)`);

}

module.exports.help = {

    name: "clear"

}