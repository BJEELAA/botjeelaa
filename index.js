const discord = require("discord.js");
const botConfig = require("./botconfig.json");
// const readline = require("readline")
const fs = require("fs");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

function login(token) {
    client.login(token);
}

const client = new discord.Client();

//this code makes it so i can have two separate instances, if you don't want this, just use
// login(botConfig.token)
//if you do want to use this method, i trust you understand how this works and make it work yourself

if(botConfig.test === "yes") {
    login(botConfig.testjeelaa);
} else login(botConfig.botjeelaa);

client.on("ready", async () => {

    console.log(`${client.user.username} is online`);
    client.user.setActivity("hentai", {type: "WATCHING"});

});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type == "dm") {

        console.log(message.author.username + ": " + message.content);
        if(client.channels.cache.find(channel => channel.name === "logjeelaa")){

            let channel = client.channels.cache.find(channel => channel.name === "logjeelaa")
            channel.send(message.author.username + ": " + message.content);
        }
        return message.channel.send("smh imagine being so lonely that you'd dm a literal robot");

    }

    if(message.mentions.members.first()){
        let id = message.mentions.members.first().id
        if(id == 242654955759075329) return message.channel.send("https://media.discordapp.net/attachments/816946219472519201/820241776338010142/ezgif.com-gif-maker.gif") // , {files: ["./media/ezgif.com-gif-maker.gif"]}
    }

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");
    var arrayLength = messageArray.length;

    var command = messageArray[0];

    if(command === `${prefix}lenny`){
        message.delete();
        return message.channel.send(message.author.username + ": ( ͡° ͜ʖ ͡°)");
    }

    if(command === `${prefix}whoistooafraidtojoinavc`){
        return message.channel.send("Oh, that's lilSpOwOky ofcourse!")
    }

    if(command === `${prefix}gimmelistpls`){

        var botEmbed = new discord.MessageEmbed()
            .setTitle("List of people who are afraid of VCs")
            .setColor("#c8ff00")
            .addField("Number One", "lilSpOwOky")
            .addField("Number Two", "literally no1 else cuz you just mute smh")
            .setThumbnail("https://media.discordapp.net/attachments/740161071758704713/808758542332985344/unknown.png");

        return message.channel.send(botEmbed);
    }

    if(command === `${prefix}thisistotallyacommand`){
        return message.channel.send("yup, it is")
    }
    if(command === `${prefix}dm`){
        let user = client.users.fetch(messageArray[1]);
        let dmMsg = "";
        user.then(function(dmUser) {

            for (var i = 2; i < arrayLength; i++){
                dmMsg += messageArray[i] + " "
            }
            dmUser.send(dmMsg);
        })
        return;
    }
    if(command === `${prefix}botstatus`){

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

    if(command === `${prefix}funfact`){
        let rng = Math.random();
        let facts = ["Jerrie is een neushoorn"," Max is DE MAX","Karanbier houdt van pilsjes","Gunks is big chungus","Liere houdt van 'lire' (lezen)","Sandy ~~hates~~ loves sand","Max zijn laptop houdt van ontploffen","Lowiek is dom","Neushoorns zijn altijd Jerrie","Bela likes to be called C-la   -Lil G","Winston likes to **win** **ston**ks   -Lil G","haha programming go brrrrrr","Mario vindt Bowser gay, en zegt dit in een van de games","banana","haha stinky stinky"]
        let fact = facts[Math.floor(rng * facts.length)];
        let aaa=Math.floor(rng * facts.length)+1
        let print = "Fun Fact " + aaa + ": " + fact
        return message.channel.send(print);
        
    }

});