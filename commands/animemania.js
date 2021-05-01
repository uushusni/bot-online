const Discord = require('discord.js')
module.exports = {
    name: 'anm',
    description: "Embeds",
    execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
            
            message.author.send(embed,{files: ["./commands/animemania.lua"]});
            const embed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_pirates')
            .setThumbnail(message.author.username)
            .setDescription('ANIME MANIA')
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(embed1);
        
        
    }
    
}