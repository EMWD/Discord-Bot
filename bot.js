let config = require('./config.json');
let token = config.token;
let prefix = config.prefix;
commands = require('./commands.js');
CommandsArr = commands.CommandsArr;
const permissions = 8
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(token);
const { Client, Attachment, RichEmbed } = require('discord.js');

//--------------------Test of Connecting-----------------------

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//---------------------Looping Prevention----------------------

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "say"){
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }})

//----------------------Ping Pong------------------------------

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('Pongg!');
    }});
//------------------------Help---------------------------------

client.on('message', msg => {
  if (msg.content === prefix + 'help') {
  	str = "\n";
  	CommandsArr.forEach(function(elem) {
  	str +=  "\n" + elem;
	});
	msg.reply(str);
}});

//------------------------Ava----------------------------------

client.on('message', message => {
  if (message.content === prefix+'ava') {
    message.reply(message.author.avatarURL);
  }
});

//----------------------XUI Picture----------------------------

client.on('message', message => {
    if (message.content === prefix+'xui') {
        const attachment = new Attachment('https://img.xda-cdn.com/58NZkUUtxYNw39gpurqSIPBmJ2s=/https%3A%2F%2Fking4ng.files.wordpress.com%2F2017%2F10%2Fxui.jpg');
        message.channel.send(attachment);
    }
});

//----------------------Welcome [need fix]----------------------

client.on('message', msg => {
  if (msg.content === prefix + 'a') {
  	const channel = 'test';
    channel.send(`Welcome to the server, ${member}`);
}});

//------------------------Mum Fucker-----------------------------

client.on('message', msg => {
 
  if (msg.content[0] === '!' && msg.content[1] === 'f' && msg.content[5] === 'm' && msg.content[0] === prefix){
  	var string = "";
  	var initSTR = msg.content;
  	var len = initSTR.length;
  	for(var i = 8; i < len; i++){
  		string += msg.content[i];
  	}
  	msg.reply("Yeap i`am fucking" + string + " rigth now!");
  }
});

//--------------------------Embed--------------------------------

client.on('message', message => {
  if (message.content === prefix + 'embed') {
    var userName = message.member.user.tag;
    userName = userName.slice(0, -5);
    const embed = new RichEmbed()
      .setTitle('created new embed')
      .setColor(0x345612) //green embed
      .setAuthor(userName)
      .setDescription('Hello, this is a new embed!');
    message.channel.send(embed);
  }
});


client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});


client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});


//   if(command === "clear") {     

//     const deleteCount = parseInt(args[0], 10);
//    
//     if(!deleteCount || deleteCount < 2 || deleteCount > 100)
//       return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
//     const fetched = await message.channel.fetchMessages({limit: deleteCount});
//     message.channel.bulkDelete(fetched)
//       .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
//   }
// });