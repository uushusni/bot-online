const Discord = require('discord.js')
module.exports = {
    name: 'afs',
    description: "Embeds",
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Anime Fighting Simulator')
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription('```loadstring(game:HttpGet("https://darkhub.xyz/remote-script.lua", true))()```')
            .setAuthor(message.author.username)
            .addField('STATUS', 'work')
            .setFooter('DM owner jika ada script yg mau request')
            .setTimestamp()
            message.author.send(embed);
            const embed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_Pirates')
            .setThumbnail(message.author.username)
            .setDescription('Anime Fighting Simulator')
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(embed1);
        
    }
}