const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Know the Server Info',
    category: 'Utility',
    guildOnly: true,
    async run(client, message, args){
			let embed = new Discord.MessageEmbed()
      .setColor("fffff")
      .setTitle("Server Info")
      .setThumbnail(message.guild.iconURL())
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .addField("**Guild Owner:**", `${message.guild.owner}`, true)
      .addField("**Member Count:**", `${message.guild.memberCount}`, true)
      .addField("**Total Real Members**", message.guild.members.cache.filter(member => !member.user.bot).size, true)
      .addField("**Total Bots**", message.guild.members.cache.filter(member => member.user.bot).size, true)
      .addField("**Total Channels**", message.guild.channels.cache.size, true)
      .addField("**Total Text Channels**", message.guild.channels.cache.filter(ch => ch.type === 'text').size, true)
      .addField("**Total Voice Channels**", message.guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
      .addField("**Created On**", message.guild.createdAt.toLocaleString(), true)
      .addField("**Roles**",`${message.guild.roles.cache.map(role => role.toString()).join(' ')}`)
      .setFooter(`© ${message.guild.me.displayName}`, "https://cdn.discordapp.com/attachments/815962094058864732/817824008694267934/Salinan_online-logo-maker-with-an-illustrated-pirate-skull-2811u.png?size=512");

		let embedd = new Discord.MessageEmbed()
      .setColor("fffff")
      .setTitle("Server Info")
      .setThumbnail(message.guild.iconURL())
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .addField("**Guild Owner:**", `${message.guild.owner}`, true)
      .addField("**Member Count:**", `${message.guild.memberCount}`, true)
      .addField("**Total Real Members**", message.guild.members.cache.filter(member => !member.user.bot).size, true)
      .addField("**Total Bots**", message.guild.members.cache.filter(member => member.user.bot).size, true)
      .addField("**Total Channels**", message.guild.channels.cache.size, true)
      .addField("**Total Text Channels**", message.guild.channels.cache.filter(ch => ch.type === 'text').size, true)
      .addField("**Total Voice Channels**", message.guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
      .addField("**Created On**", message.guild.createdAt.toLocaleString(), true)
      .addField("**Roles**",`There are a lot of Roles **I was not able to Show Them**`)
      .setFooter(`© ${message.guild.me.displayName}`, "https://cdn.discordapp.com/avatars/796748319518097419/6417c8b4c69da903eef8db73e435e5c3.png?size=512");
    
    message.channel.send(embed).catch(err => {
      console.log(err);
      message.channel.send(embedd);
    })
	}
}