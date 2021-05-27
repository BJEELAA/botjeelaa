const discord = require("discord.js");

module.exports.run = async(client, message, args, messageArray, prefix) =>{

    function lkr(leerkracht, beschrijving){

        if(args[0].toLowerCase() === leerkracht.toLowerCase()){
            return message.channel.send(beschrijving);
        }

    }

    if(args.length === 0) return message.channel.send(`Add a teacher: ${prefix}leerkracht [last name teacher]`);

    lkr("Bracke", "Mr. Bracke is onze informatica leerkracht.\n Hij leert ons Excel.");
    lkr("VanCauter", "Mvr. Van Cauter is onze IW leerkracht, ze leert ons erg weinig bij.");
    lkr("DeLauw", "Mr. De Lauw, beter bekend als De Lauwe Worst, is onze fysica/wiskunde leerkracht.");
    lkr("Kint", "Mvr. Kint is onze erg saaie geschiedenis leerkracht. Door zwangerschap is ze erg lang afwezig geweest, dus dat is leuk.");
    lkr("VanderEecken", "KVdE is onze BIO/Chemie leerkracht en onze klastitularis. Ze probeert grappig te zijn maar ze is gewoon erg cringe.");
    lkr("Deproost", "Mvr. Deproost is een stereotype boomer, en dus ook onze godsdienst leerkracht. We praten meer over politiek dan over godsdiesnt.");
    lkr("Neckebroeck", "Nekkie is onze leerkracht Frans, maar hij geeft les over van alles en nog wat. Hij is erg ambitieus en geeft graag buizen aan meisjes genaamd Margaux.");
    lkr("VanEck", "Mr. van Eck is onze leerkracht Engels. Hij speelt games en geeft extra opdrachten aan de goede werkers.");
    lkr("Renard", "Mr. Renard is onze altijd-te-laat leerkracht Nederlands. Zoals ik zal zei, is hij al-tijd te laat. Dat is dan blijkbaar onze schuld dus gaat hij dan 10 minuten langer door.");
    lkr("Teirlynck", "Mvr. Teirlynck is onze PO-leerkracht. Ze maakt graag grapjes over s*x en dat soort dingen. Ze is een leuke leerkracht.")

}

module.exports.help = {

    name: "leerkracht"

}