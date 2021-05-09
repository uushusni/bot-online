const Discord = require("discord.js")
module.exports = {
    name: 'gpo',
    description: "Embeds",
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('GRAND PIECE ONLINE')
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription('**note!. copy kedua script tersebut kedalam executor**')
            .addFields(
                {name: '1', value: '```loadstring(game:HttpGet("https://gameovers.net/Users/Grandomatic/files/loader.lua"))()```'},
                {name: '2', value: '```loadstring(game:HttpGet("https://gameovers.net/Users/Grandomatic/files/loader2.lua"))()```'}
            )
            .setAuthor(message.author.username)
            .addField('STATUS', 'work', 'ini script cuma buat synpse x')
            .setFooter('DM owner jika ada script yg mau request')
            .setTimestamp()
            message.author.send(embed);
            const embed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_Pirates')
            .setThumbnail(message.author.username)
            .setDescription('GRAND PIECE ONLINE')
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(embed1);
        
    }
}