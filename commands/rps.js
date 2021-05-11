const discord = require("discord.js");

module.exports.run = async(client, message, args, messageArray) =>{

    var rng = Math.random();
    var number = rng*3;
    var c = number.ceil();

    if(computer == 1) computer = "rock";
    if(computer == 2) computer = "paper";
    if(computer == 2) computer = "scissors";

    var p = args[0].toLowerCase();

    if(c == "rock" && p == "rock") return message.channel.send("We both picked **rock**, so it's a tie");
    if(c == "paper" && p == "paper") return message.channel.send("We both picked **paper**, so it's a tie");
    if(c == "scissors" && p == "scissors") return message.channel.send("We both picked **scissors**, so it's a tie");
    if(c == "rock" && p == "paper") return message.channel.send("I picked **rock** and you picked **paper**, so you win :(");
    if(c == "rock" && p == "scissors") return message.channel.send("I picked **rock** and you picked **scissors**, so I win :D");
    if(c == "paper" && p == "rock") return message.channel.send("I picked **paper** and you picked **rock**, so I win :D");
    if(c == "paper" && p == "scissors") return message.channel.send("I picked **paper** and you picked **scissors**, so you win :(");
    if(c == "scissors" && p == "rock") return message.channel.send("I picked **scissors** and you picked **rock**, so you win :(");
    if(c == "scissors" && p == "paper") return message.channel.send("I picked **scissors** and you picked **paper**, so I win :D");

}

module.exports.help = {

    name: "rps"

}