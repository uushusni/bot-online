const Discord = require("discord.js")
module.exports = {
    name: 'list',
    description: "Embeds",
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('LIST SCRIPT')
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                {name: '1', value: 'arsenal(!arsenal)'},
                {name: '2', value: 'anime fighting siulator(!afs)'},
                {name: '3', value: 'BloxFruit(!bf)'},
                {name: '4', value: 'RO-GHOUL(!ghoul)'},
                {name: '5', value: 'Universal Time(!jojo)'},
                {name: '6', value: 'KingPiece(!kp)'},
                {name: '7', value: 'ProjectX(!prox)'},
                {name: '8', value: 'ShindoLife(!shindo)'},
                {name: '9', value: 'Wisteria(!wisteria)'},
                {name: '10', value: 'anime mania(!anm)'},
                {name: '11', value: 'last piece(!lp)'}
            )
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(embed);
        
    }
}