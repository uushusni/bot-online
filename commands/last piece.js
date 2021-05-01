const Discord = require("discord.js")
module.exports = {
    name: 'LP',
    description: "Embeds",
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('KING PIECE SCRIPT')
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription('```loadstring(game:HttpGet("https://raw.githubusercontent.com/LeadMarker/LeadMarker/main/LastPiece"))()```')
            .setAuthor(message.author.username)
            .addField('STATUS', 'work')
            .setFooter('DM owner jika ada script yg mau request')
            .setTimestamp()
            message.author.send(embed);
            const embed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_Pirates')
            .setThumbnail(message.author.username)
            .setDescription('Last Piece')
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(embed1);
        
    }
}