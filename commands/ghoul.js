module.exports = {
    name: 'ghoul',
    description: "Embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('RO-GHOUL SCRIPT')
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription('```loadstring(game:HttpGet("https://raw.githubusercontent.com/BunnySalf/Hentai/main/MHEEHUB",true))()```')
            .setAuthor(message.author.username)
            .addField('STATUS', 'work')
            .setFooter('DM owner jika ada script yg mau request')
            .setTimestamp()
            message.author.send(newEmbed);
        const newEmbed1 = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle('Reds_pirates')
            .setThumbnail(message.author.username)
            .setDescription('RO-GHOUL')
            .addField('Check Youre DM FOR Script', 'DENIM IS GOD')
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(newEmbed1);
        
    }
}