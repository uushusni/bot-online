const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
    name: "weather",
    category: "extra",
    run: async (client, message, args) => {
        let city = args.join(" ");
        let degreetype = "C";

        await weather.find({search: city, degreeType: degreetype}, function(err, result){
            if (!city) return message.channel.send("Insert the city");
            if (err || result === undefined || result.length === 0) return message.channel.send("Unknown City Bitch");

            let current = result[0].current;
            let location = result[0].location;

            const embed = new Discord.MessageEmbed()
            .setAuthor(current.observationpoint)
            .setDescription(`> ${current.skytext}`)
            .setThumbnail(current.imageUrl)
            .setTimestamp()
            .setColor(0x7289DA)

            embed.addField("Garis Lintang", location.lat, true)
            .addField("Garis bujur", location.long, true)
            .addField("Terasa seperti", `${current.feelslike} °Degree`, true)
            .addField("Jenis derajat", location.degreetype, true)
            .addField("Kelembaban", `${current.humidity}%`, true)
            .addField("Zona waktu", `GMT ${location.timezone}`, true)
            .addField("Suhu", `${current.temperature}°Degree`, true)
            .addField("Waktu Pengamatan", current.observationtime, true)
            
            return message.channel.send(embed);
            
        })
    }
    
    

}

