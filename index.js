const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");
//login functie
function login(token) {
    client.login(token);
}

const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) =>{

    if(err) console.log(err);
    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <= 0) {
        console.log("No command files found");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`File ${f} has been loaded`);

        client.commands.set(fileGet.help.name, fileGet);

    })

})

//testjeelaa en botjeelaa
if(botConfig.test === "yes") {
    login(botConfig.testjeelaa);
} else login(botConfig.botjeelaa);

client.on("ready", async () => {

    console.log(`${client.user.username} is online`);
    client.user.setActivity("made by bjeelaa", {type: "PLAYING"});

});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type == "dm") {

        console.log(message.author.username + ": " + message.content);
        if(client.channels.cache.find(channel => channel.name === "logjeelaa")){

            let channel = client.channels.cache.find(channel => channel.name === "logjeelaa")
            channel.send(message.author.username + ": " + message.content);
        }
        return message.channel.send("Logged");

    }

    //funny gif when bjeelaa pinged

    // if(message.mentions.members.first()){
    //     let id = message.mentions.members.first().id
    //     if(id == 242654955759075329) return message.channel.send("https://media.discordapp.net/attachments/816946219472519201/820241776338010142/ezgif.com-gif-maker.gif") // , {files: ["./media/ezgif.com-gif-maker.gif"]}
    // }

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");
    var arrayLength = messageArray.length;

    var command = messageArray[0];
    var args = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    //run appropriate module
    if(commands) commands.run(client, message, args, messageArray);

});