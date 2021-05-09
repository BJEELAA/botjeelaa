const discord = require("discord.js");

module.exports.run = async (client, message, args, messageArray) => {

    let rng = Math.random();
    let facts = ["Jerrie is een neushoorn", " Max is DE MAX", "Karanbier houdt van pilsjes", "Gunks is big chungus", "Liere houdt van 'lire' (lezen)", "Sandy ~~hates~~ loves sand", "Max zijn laptop houdt van ontploffen", "Lowiek is niet zo slim", "Neushoorns zijn altijd Jerrie", "Bela likes to be called C-la   -Lil G", "Winston likes to **win** **ston**ks   -Lil G", "haha programming go brrrrrr", "Mario vindt Bowser gay, en zegt dit in een van de games", "banana", "haha stinky stinky"]
    
    if(args.length != 0){

        var fact = facts[args[0]-1]
        var factNr = args[0];

    }else{

        var fact = facts[Math.floor(rng * facts.length)];
        var factNr = Math.floor(rng * facts.length) + 1;

    }

    let slash = "/"
    let print = `Fun Fact ${factNr}${slash}${facts.length}: ${fact}`
    return message.channel.send(print);

}

module.exports.help = {

    name: "funfact"

}