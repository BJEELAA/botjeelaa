const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");
//login functie
function login(token) {
    client.login(token);
}

const client = new discord.Client();
client.commands = new discord.Collection();

client.on('guildMemberAdd', async member => {

    var role = member.guild.roles.cache.get('843196142635188225');

    if(!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('843197361819222016');

    if(!channel) return;

    channel.send(`Welcome to the server <@${member.id}>!`);

    member.send("Hey! Welcome to the **BJEELAA Dev** server!\nMake sure to read the rules, and all the information channels!\nHave fun on the server!");

})

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
        return message.channel.send("logged in all accessable #logjeelaa channels");

    }

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(/ +/);
    var arrayLength = messageArray.length;

    var command = messageArray[0];
    var args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    //search for module in client.commands collection
    var commands = client.commands.get(command.slice(prefix.length));

    //run appropriate javascript module in ./commands/
    if(commands) commands.run(client, message, args, messageArray, prefix);

});