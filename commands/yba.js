const Discord = require("discord.js")
module.exports = {
    name: 'yba',
    description: "Embeds",
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('YOUR BIZARE ADVENTURE')
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                {name: '1', value:'```loadstring(game:HttpGet("https://raw.githubusercontent.com/MidnightKittenCat/script-idk/main/YBA.lua"))()```' },
                {name: '2', value: '```loadstring(game:HttpGet("https://raw.githubusercontent.com/kolgie/YBA-GUI/main/yba-gui-obfuscated.lua"))()```'}
            )
            .setAuthor(message.author.username)
            .addField('STATUS', 'work')
            .setFooter('DM owner jika ada script yg mau request')
            .setTimestamp()
            message.author.send(embed);
            const embed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_Pirates')
            .setThumbnail(message.author.username)
            .setDescription('YOUR BIZARE ADVENTURE')
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(embed1);
        
    }
}