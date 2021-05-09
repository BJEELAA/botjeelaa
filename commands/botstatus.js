const discord = require("discord.js");

module.exports.run = async(client, message, args, messageArray) =>{

    var Embed = new discord.MessageEmbed()
            .setTitle(client.user.username + "'s status")
            .setThumbnail("https://cdn.discordapp.com/avatars/808740776028143636/a7cecf88de7717b6fbb9834a7d23b13d.png?size=256")
            .setColor("#521ea6")
            .setFooter("Info about BOTJEELAA")
            .setTimestamp()
            .setDescription("Everything there is to know about " + client.user.username + ". If you'd like to know more, DM BJEELAA#6666, this bot's dad")
            .addField("What does it do?", "This bot does a great number of things, from **Music** to **Banning** everyone in the server")
            .addField("Is the bot always online?", "It should be, if nothing happens on Heroku's side of things.")
            .addField("Who made the bot?", "That was me, BJEELAA#6666. I started this project as a learning opportunity but it turned out to be something way bigger.")
            .setImage("https://cdn.discordapp.com/avatars/242654955759075329/e4823684fa5018f9bd1d01d9df50bbdc.png?size=64");

        return message.channel.send(Embed);

}

module.exports.help = {

    name: "botstatus"

}