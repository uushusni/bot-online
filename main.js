const Discord = require('discord.js');
const weather = require('weather-js');

const client = new Discord.Client();
const bot = new Discord.Client();


const prefix = '-';

const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('denim is online!');
    client.user.setActivity('pornhub', { type: 'WATCHING'}).catch(console.error);
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

client.on('guildMemberAdd', member => {

})
client.on('guildMemberRemove', member => {

})
client.on('guildBanAdd', (guild, user) => {

})
client.on('guildBanRemove', (guild, user) => {
    
})

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'executor'){
        client.commands.get('executor').execute(message, args, Discord);
    }if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    }if (command == 'ping'){
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send(':ping_pong: `'+ping+' ms.`');
    }if (command == 'arsenal'){
        client.commands.get('arsenal').execute(message, args, Discord);
    }if (command == 'jojo'){
        client.commands.get('jojo').execute(message, args, Discord);
    }if (command == 'list'){
        client.commands.get('list').execute(message, args, Discord);
    }if (command == 'prox'){
        client.commands.get('prox').execute(message, args, Discord);
    }if (command == 'shindo'){
        client.commands.get('shindo').execute(message, args, Discord);
    }if (command == 'ghoul'){
        client.commands.get('ghoul').execute(message, args, Discord);
    }if (command == 'kp'){
        client.commands.get('kp').execute(message, args, Discord);
    }if (command == 'bf'){
        client.commands.get('bf').execute(message, args, Discord);
    }if (command == 'wisteria'){
        client.commands.get('wisteria').execute(message, args, Discord);
    }if (command == 'whois'){
        client.commands.get('whois').run(client, message, args);
    }if (command == 'weather'){
        client.commands.get('weather').run(client, message, args);
    }

});

client.login('ODE2NjA3MjA1NTM2NDMyMTI4.YD9auQ.O0sQ-BqLNeK-IP_B02I3QUQlK2Q')
