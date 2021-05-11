const discord = require("discord.js");

module.exports.run = async(client, message, args, messageArray) =>{

    if(args.length() != 0){
        let rng = Math.random();
        let a = rng*3
        let number = a.ceil();
        if(number == 1){
            print ()
        }
    }else return message.channel.send("Usage: !rps [rock, paper, scissors]")
    

}

module.exports.help = {

    name: "rps"

}