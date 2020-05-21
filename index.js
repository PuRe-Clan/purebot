const Discord = require('discord.js');
const botConfig = require("./botconfig.json");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Is ${client.user.tag} online`);

  client.user.setActivity("Pure Status", {type: "PLAYING"});

});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "general");

    if(!channel) return;

    const welcomeEmbed = new Discord.MessageEmbed()
    .setAuthor(`New Member`)
    .setDescription(`Welcome ${member}, \n Read #about for our socials and ToS. Have a great stay!`)
    .setColor("#0026ff")
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL)
    .setFooter("Pure Clan | User Joined");
    channel.send(welcomeEmbed);
});

client.on("message", async message => {

  if (message.author.bot) return;

  if (message.channel.type === "dm") return;

  var prefix = botConfig.prefix;

  var messageArray = message.content.split(" ");

  var command = messageArray[0];

  var arguments = messageArray.slice(1);

  if ( command === `${prefix}instagram`){
    
    return message.channel.send("https://www.instagram.com/puretfup/");
  }
  
  if ( command === `${prefix}youtube`){
    
    return message.channel.send("https://www.youtube.com/c/PuReClanGG");
  }

  if ( command === `${prefix}members`){
    
    return message.channel.send(`We got **${message.guild.memberCount}** members`);
  }

  if ( command === `${prefix}twitter`){
    
    return message.channel.send("https://twitter.com/puretfup");
  }


});


client.login(process.env.token);