const Discord = require('discord.js')
module.exports = {
    name: 'wisteria',
    description: "Embeds",
    execute(message, args, client) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Wisteria SCRIPT')
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                {name: '1', value: '```loadstring(game:HttpGet("loadstring(game:HttpGet("https://pastebin.com/raw/Eb8YpxGu", true))()```'},
                {name: '2', value: '```loadstring(game:HttpGet("https://raw.githubusercontent.com/meliodasforseven/CoronaProject/master/wisteria.lua", true))()```'},
                {name: '3', value: '```loadstring(game:HttpGet("https://raw.githubusercontent.com/Vzurxy/Scripts/main/wisteria.lua", true))()```'}
            )
            .setAuthor(message.author.username)
            .addField('STATUS', 'work')
            .setFooter('DM owner jika ada script yg mau request')
            .setTimestamp()
            message.author.send(newEmbed);
        const newEmbed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_pirates')
            .setThumbnail(message.author.username)
            .setDescription('WISTERIA')
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(newEmbed1);
        
    }
}