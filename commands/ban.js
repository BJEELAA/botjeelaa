const discord = require("discord.js");

module.exports.run = async (client, message, args, messageArray, prefix) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Sorry, but you don't have the correct permissions to do this");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Seems like I don't have the necessary permissions to do this");
    if (!message.mentions.members.first()) return message.reply(`Usage: ${prefix}ban <@person> <reason>`);
    if (args.length < 2) return message.reply(`Usage: ${prefix}ban <@person> <reason>`);

    var banUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));

    if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't ban moderators");

    var reason = args.splice(1).join(" ");
    var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("React within 30 seconds")
        .setDescription(`Do you want to ban ${banUser.user.tag}?`)

    var embedBan = new discord.MessageEmbed()
        .setTitle(`**Ban**`)
        .setColor("#ff0000")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Banned: ** ${banUser.user.tag} (${banUser.user.id})
        **Banned by: ** ${message.author}
        **Reason: ** ${reason}`)

    message.channel.send(embedPrompt).then(async msg =>{

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        if(emoji === "✅"){

            msg.delete();

            banUser.ban({days: 7, reason: reason}).catch(err =>{

                if(err) return message.reply("Something went wrong");

            });

            message.channel.send("User succesfully banned");

            var banChannel = client.channels.cache.find(channel => channel.name === "mod-actions") || message.channel;
            banChannel.send(embedBan);
            message.mentions.members.first().send(`You have been banned for: **${reason}**`);

        }else if(emoji === "❌"){

            msg.delete();
            return message.reply("Cancelled ban").then(m => m.delete(5000)); 

        }

    })

    async function promptMessage(message, author, time, reactions){

        time *= 1000;
        for(const reaction of reactions){
            await message.react(reaction);
        }

        var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

        return message.awaitReactions(filter, {max: 1, time: time}).then(collected => collected.first() && collected.first().emoji.name);


    }

}

module.exports.help = {

    name: "ban"

}