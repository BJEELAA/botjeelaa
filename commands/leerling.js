const discord = require("discord.js");

module.exports.run = async (client, message, args, messageArray, prefix) => {

    function l(leerling, beschrijving) {

        if (args[0].toLowerCase() === leerling.toLowerCase()) {
            return message.channel.send(beschrijving);
        }

    }

    if (args.length === 0) return message.channel.send(`Add a teacher: ${prefix}leerkracht [last name teacher]`);

    l("lukasdc", "Lukas De Cleene zit vooraan de klas. Veel is er niet over hem te zeggen, hij is de stereotype derdemiddelbarer.");
    l("lowiek", "Lowiek... Lowiek, dat is een gevalletje speciaal. Laat ik gewoon zeggen dat je niet naast hem wil zitten.");
    l("max", "Max(imillian) is een toxic Twitterer, Redditer en Discorder. Hij speelt Krunker en noemt mensen hun moeder een homo kikker.");
    l("matthias", "Matthias is epic, hij draagt een bril en hij is nice, gewoon een epic persoon.");
    l("stan", "Stan is een typisch hangjonger. Hij hangt onder bruggen (letterlijk, hangt) en drinkt energydrink.");
    l("mauro", "Mauro is een basketbal fan, hij speelt veel Minecraft en heet eigenlijk Gayro (volgens Nekkie)");
    l("lukasv", "Lukas Verherbrugge is epic, hij draagt een bril, en hij is een epic persoon.");
    l("timo", "Timo is ~~een strever~~ slim. Hij haalt 10/10 op zo goed als elke toets en hij speelt Minecraft.");
    l("senne", "Senne heeft oranje/rood haar, draagt een bril, heeft een brein zo groot als de maan en heeft dyslexie. Speelt ook Minecraft.");
    l("jerom", "Jerrie is een neushoorn. That's it. Een menselijke neushoorn.");
    l("bela", "Dat ben ik, of technisch gezien dat is mijn bedenker ofzo. Erg raar om zoiets over jezelf te schrijven");
    l("sander", "Sandy Wandy is pog. Speelt veel games en heeft huge brain.");
    l("ibe", "Ibe is een sporter, schrijver en slim persoon. Hij kan zonder moeite 3 rondjes rond de wereld rennen, hij schrijft boeken in zijn vrije tijd en haalt goede punten op elke toets.");
    l("ewout", "Ewaaaa drairieeeeeeeeeeeee Hoe is 't met de kinderssssssss wolllaaaaaah");
    l("gregg", "Greggieboyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
    l("sebastiaan", "Sebastiaan is een Nederlander, just like me ;)");

}

module.exports.help = {

    name: "ll"

}