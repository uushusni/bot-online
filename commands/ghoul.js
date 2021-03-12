const Discord = require('discord.js')
module.exports = {
    name: 'ghoul',
    description: "Embeds",
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('RO-GHOUL SCRIPT')
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                {name: '1', value:'```loadstring(game:HttpGet("https://raw.githubusercontent.com/BunnySalf/Hentai/main/MHEEHUB",true))()```'},
                {name: '2', value: '```loadstring(game:HttpGetAsync("https://raw.githubusercontent.com/z4gs/scripts/master/Ro-Ghoul%20Auto%20Farm.lua"))()```'}
                )
            .setAuthor(message.author.username)
            .addField('STATUS', 'work')
            .setFooter('DM owner jika ada script yg mau request')
            .setTimestamp()
            message.author.send(embed);
        const embed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_pirates')
            .setThumbnail(message.author.username)
            .setDescription('RO-GHOUL')
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(embed1);
        
    }
}