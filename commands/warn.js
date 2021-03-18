const Discord = require('discord.js');
const config = require('../config.json')
 
// Run Command Handler And Code
 
module.exports = {
    name: 'warn',
    description: 'warn user',
    usage: 'warn',
    category: 'Fun',
    guildOnly: true,
    async execute(message, args, client) {
        if (message.author.id === config.owner){
    var user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.reply('mention user shithead!')
 
    var member;
    try {
        member = await message.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
 
if(!member) return message.reply('The user isnt in the server bitch');
    
var reason = args.splice(1).join(' ');
    if(!reason) return message.reply('add a reason to punish this user!');
    if(message.author.id === user.id) return message.reply('cannot warn yourself!');
    var warnEmbed = new Discord.MessageEmbed()
        .setColor('0x05ff4c')
        .setDescription(`${user} has been warned by ${message.author}`)
        .setFooter('This message will auto-delete in 10 seconds.')
      var sendEm = await message.channel.send(warnEmbed);
       message.delete()
       setTimeout(() => {
       sendEm.delete()
        }, 10000);
var embed = new Discord.MessageEmbed()
.setColor('0xff3030')
    .setTitle('You were warned by **denim**!')
    .setDescription('Server: **MABAR GPO**')
    .addField('Reason:' , `${reason}`)
    .setFooter('DM owner,staff to appeal warn')
    .setThumbnail('https://cdn.discordapp.com/attachments/489084464224534546/817030994237849650/image1.jpg')
    try {
    user.send(embed);
    } catch(err) {
    console.warn(err);
        }
        }else {
            let cannotUse = new Discord.MessageEmbed()
                .setDescription('You cannot use this command SHIT HEAD!. Only **OWNERS**')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(cannotUse)
        }
    }
}