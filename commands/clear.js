module.exports = {
    name: 'clear',
    description: "clear messages",
    async execute(message, args){
        if(!args[0]) return message.reply("enter the amount to delete shithead!");
        if(isNaN(args[0])) return message.reply("enter the real number sucker!");

        if(args[0] > 300) return message.reply("You cant delete more than 1K! ok bitch?");
        if(args[0] <1) return message.reply("You must delete atleast 1 message UNDERSTAND?");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}