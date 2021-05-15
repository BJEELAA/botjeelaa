const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, messageArray, prefix) => {

    if (message.deletable) {
        message.delete();
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) return message.channel.send("That's either not a a number, or less than or equal to 0")

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, but you don't have the necessary permissions to do this.");

    if (!args[0]) return message.channel.send(`Usage: ${prefix}clear <amount>`);



    let deleteAmount;

    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
        .then(deleted => message.channel.send(`Cleared ${deleted.size} messages`))
        .catch(err => message.reply(`Something went wrong... ${err}`))
        .then(msg => msg.delete({ timeout: 3000 }));



}

module.exports.help = {

    name: "clear"

}