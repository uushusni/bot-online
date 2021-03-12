const {MessageEmbed} = require("discord.js");
const moment = require("moment") //npm i moment
module.exports = {
    name:"serverinfo",
    execute(message, args, client) {
        let roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        let emojis = message.guild.emojis.cache;
        let members = message.guild.members.cache;
        let channels = message.guild.channels.cache;
        let embed = new MessageEmbed()
        .setTitle(`Information for ${message.guild.name}`)
        .setThumbnail(message.guild.iconURL())
        .setColor("RED")
        .addField("Normal information", [
            `**❯ Name**: ${message.guild.name}`,
            `**❯ ID**: ${message.guild.id}`,
            `**❯ Icon**: [click here](${message.guild.iconURL({dynamic: true})})`,
            `**❯ Owner**: <@${message.guild.ownerID}>`,  
            '\u200b'
        ])
        .addField('More information', [
            `**❯ Membercount**: ${message.guild.memberCount}`,
            `**❯ Bots**: ${members.filter(m => m.user.bot).size}`,
            `**❯ Humans**: ${members.filter(m => !m.user.bot).size}`,
            `**❯ Emoji count**: ${message.guild.emojis.cache.size}`,
            `**❯ Animated Emoji count**: ${emojis.filter(e => e.animated).size}`,
            `**❯ Not animated Emoji count**: ${emojis.filter(e => !e.animated).size}`,
            `**❯ Role count**: ${roles.length}`,
            `**❯ Channels**: ${message.guild.channels.cache.size}`,
            `**❯ Text Channels**: ${channels.filter(ch => ch.type === "text").size}`,
            `**❯ Voice Channels**: ${channels.filter(ch => ch.type === "voice").size}`,
            `**❯ News Channels**: ${channels.filter(ch => ch.type === "news").size}`,

           

            '\u200b'
        ])
        .addField("Statuses", [
            `**❯ Online**: ${members.filter(m => m.presence.status === "online").size}`,
            `**❯ Idle**: ${members.filter(m => m.presence.status === "idle").size}`,
            `**❯ Dnd**: ${members.filter(m => m.presence.status === "dnd").size}`,
            `**❯ Offline**: ${members.filter(m => m.presence.status === "offline").size}`,
            '\u200b'
        ])
        message.channel.send(embed)
    }
}