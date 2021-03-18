const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports =  {
    name: 'afk',
    description: "Moderation",
    async execute(message, args, client) {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`youre afk have been set\n**Reason:**${content}`)
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
    var sendEm = await message.channel.send(embed);
        message.delete()
            setTimeout(() => {
            sendEm.delete()
        }, 5000);
        
    }
}