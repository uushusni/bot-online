const Discord = require('discord.js')
module.exports = {
    name: 'shindo',
    description: "Embeds",
    execute(message, args, client) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('SHINDO LIFE SCRIPT')
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                {name: '1', value: '```loadstring(game:HttpGet("https://pastebin.com/raw/i53Y3rew",true))()```'},
                {name: '2', value: '```loadstring(game:HttpGet("https://raw.githubusercontent.com/6Wumpus6/SpyHub/main/ShindoLife", true))()```'},
                {name: '3', value: '```loadstring(game:HttpGet("https://raw.githubusercontent.com/reavscripts/sl2_autofarm/main/main.lua", true))()```'}
            )
            .setAuthor(message.author.username)
            .addField('STATUS', 'work')
            .setFooter('DM owner jika ada script yg mau request')
            .setTimestamp()
            message.author.send(newEmbed);
        const newEmbed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_Pirates')
            .setThumbnail(message.author.username)
            .setDescription('SHINDO LIFE')
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(newEmbed1);
        
    }
}