const discord = require("discord.js");

module.exports.run = async (client, message, args, messageArray) => {
    var arrayLength = messageArray.length;
    let user = client.users.fetch(messageArray[1]);
    let dmMsg = "";
    user.then(function (dmUser) {
        for (var i = 2; i < arrayLength; i++) {
            dmMsg += messageArray[i] + " "
        }
        dmUser.send(dmMsg);
		message.channel.send(`DM'd "*${dmMsg}*" to **${dmUser.username}**`)
    })
    return;

}

module.exports.help = {

    name: "dm"

}