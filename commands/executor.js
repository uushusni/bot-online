module.exports = {
    name: 'executor',
    description: "link download",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor(0x6509ed)
        .setTitle('EXECUTOR')
        .setDescription('https://keshhub.com/bootstrapper/krnl_console_bootstrapper.exe')
        .setAuthor(message.author.username)
        .addField('STATUS','WORK')
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter('DM owner jika terjadi error')
        .setTimestamp()
        message.author.send(newEmbed);
    const newEmbed1 = new Discord.MessageEmbed()
        .setColor(0x6509ed)
        .setTitle('Reds_Pirates')
        .setThumbnail(message.author.displayAvatarURL())
        .setAuthor(message.author.username)
        .addField('Check Youre DM to download', 'Reds_Pirates || Comunity')
        .addField('Tonton kalo bingung', 'https://www.youtube.com/watch?v=iFqJ9xzPpGw')
        .setTimestamp()
        message.channel.send(newEmbed1);
    }
}