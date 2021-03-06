module.exports = {
    name: 'list',
    description: "Embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('LIST SCRIPT')
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                {name: '1', value: 'arsenal(,arsenal)'},
                {name: '2', value: 'BloxFruit(,bf)'},
                {name: '3', value: 'RO-GHOUL(,ghoul)'},
                {name: '4', value: 'Universal Time(,jojo)'},
                {name: '5', value: 'KingPiece(,kp)'},
                {name: '6', value: 'ProjectX(,prox)'},
                {name: '7', value: 'ShindoLife(,shindo)'},
                {name: '8', value: 'Wisteria(,wisteria)'}
            )
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(newEmbed);
        
    }
}