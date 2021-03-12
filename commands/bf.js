const Discord = require('discord.js')
module.exports = {
    name: 'bf',
    description: "Embeds",
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('BLOX FRUIT SCRIPT')
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription('```loadstring(game:HttpGet("https://raw.githubusercontent.com/BunnySalf/Hentai/main/MHEEHUB",true))()```')
            .setAuthor(message.author.username)
            .addField('STATUS', 'WORK')
            .setFooter('DM owner jika ada script yg mau request')
            .setTimestamp()
            message.author.send(embed);
        const embed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_Pirates')
            .setDescription('BLOX FRUIT')
            .setThumbnail(message.author.username)
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(embed1);
        
    }
}