const { Client, Message, Util } = require("discord.js");

module.exports = {
    name: 'steal',
    description: 'steal emoji',
    usage: 'steal',
    category: 'Fun',
    async execute(message, args, client) {
        if (!args.length) return message.reply("input emoji bitch!");
        for (const rawEmoji of args) {
            const parseEmoji = Util.parseEmoji(rawEmoji);

            if (parseEmoji.id) {
                const extension = parseEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parseEmoji.id +
            extension}`;
            message.guild.emojis
            .create(url, parseEmoji.name)
            .then((emoji) => message.channel.send(`Added: \`${emoji.url}\``));
            }
        }
    }
}