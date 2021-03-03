const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('HENTAI is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'executor'){
        client.commands.get('executor').execute(message, args);
    }if (command == 'script'){
        client.commands.get('script').execute(message, args);
    }if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    }if (command == 'ping'){
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send(':ping_pong: `'+ping+' ms.`');
    }if (command == 'kp'){
        message.channel.send('https://www.roblox.com/games/4520749081/Second-Sea-King-Piece?privateServerLinkCode=JhJZScwfQOvCVRRXRcFZobcyvNuXqu6a');
    }if (command == 'gpo'){
        message.channel.send('https://www.roblox.com/games/1730877806/VALENTINE-EVENT-Grand-Piece-Online?refPageId=a44df231-3dbd-42bc-93f7-1861577ded34');
    }
    

});

client.login('ODE2NjA3MjA1NTM2NDMyMTI4.YD9auQ.ENIt4MWkKkCY1keN3lW1WeqGwp0')
