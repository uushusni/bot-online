const Discord = require("discord.js")
module.exports = {
    name: 'prox',
    description: "Embeds",
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('PROJECT X SCRIPT')
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription('```loadstring(game:HttpGet("https://raw.githubusercontent.com/HimikoToga1474/Ahegao-Hub/master/Main.Lua"))()```')
            .setAuthor(message.author.username)
            .addField('STATUS', 'WORK')
            .setFooter('DM owner jika ada script yg mau request')
            .setTimestamp()
            message.author.send(embed);
        const embed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_Pirates')
            .setThumbnail(message.author.username)
            .setDescription('PROJECT X')
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(embed1);

        
    }
}