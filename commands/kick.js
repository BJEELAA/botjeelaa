const discord = require("discord.js");

module.exports.run = async (client, message, args, messageArray, prefix) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, but you don't have the correct permissions to do this");
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Seems like I don't have the necessary permissions to do this");
    if (!message.mentions.members.first()) return message.reply(`Usage: ${prefix}kick <@person> <reason>`);
    if (args.length < 2) return message.reply(`Usage: ${prefix}kick <@person> <reason>`);

    var kickUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));

    if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't kick moderators");

    var reason = args.splice(1).join(" ");

    var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("React within 30 seconds")
        .setDescription(`Do you want to kick ${kickUser.user.tag}?`)

    var embedKick = new discord.MessageEmbed()
        .setTitle(`User kicked`)
        .setColor("#ff0000")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Kicked: ** ${kickUser.user.tag} (${kickUser.user.id})
        **Kicked by: ** ${message.author}
        **Reason: ** ${reason}`)

    message.channel.send(embedPrompt).then(async msg =>{

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        if(emoji === "✅"){

            msg.delete();

            message.mentions.members.first().send(`You have been kicked for: **${reason}**`).then(() =>{

                kickUser.kick(reason).catch(err =>{

                    if(err) return message.reply("Something went wrong");
    
                });
    
                message.channel.send(`User succesfully kicked`);
    
                var kickChannel = client.channels.cache.find(channel => channel.name === "mod-actions") || message.channel;
                kickChannel.send(embedKick);

            });
            

        }else if(emoji === "❌"){

            msg.delete();
            return message.reply("Cancelled kick").then(m => m.delete(5000)); 

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

    name: "kick"

}