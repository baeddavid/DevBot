const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Ready!');

    client.user.setStatus('Online');
    client.user.setActivity('Hello!');
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('598578033414242310').send(`Welcome to the White Board ${member}` + '\nFeel free to introduce yourself in the `#introductions` channel.\nType `!help` to pull up the list of commands for this server.\nCheck out `#resources` for potential resources you can use.');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'help') {
		client.commands.get('help').execute(message, args);
	} else if (command === 'sort') {
		client.commands.get('sort').execute(message, args);
	} else if (command === 'server') {
        client.commands.get('server').execute(message, args);
	} else if (command === 'delete') {
		client.commands.get('delete').execute(message, args);
	} else if(command === 'algo') {
        client.commands.get('algo').execute(message, args);
    } else if(command === 'ds') {
        client.commands.get('ds').execute(message, args);
    } else if(command === 'qs') {
        client.commands.get('qs').execute(message, args);
    } else if(command === 'ms') {
        client.commands.get('ms').execute(message, args);
    } else if(command === 'is') {
        client.commands.get('is').execute(message, args);
    } else if(command ==='arrays') {
        client.commands.get('arrays').execute(message, args);
    } else if(command ==='al') {
        client.commands.get('al').execute(message, args);
    } else if(command ==='hm') {
        client.commands.get('hm').execute(message, args);
    } else if(command ==='st') {
        client.commands.get('st').execute(message, args);
    } else if(command ==='qu') {
        client.commands.get('qu').execute(message, args);
    } else if(command ==='hp') {
        client.commands.get('hp').execute(message, args);
    } else if(command ==='adt') {
        client.commands.get('adt').execute(message, args);
    } else if(command ==='pointer') {
        client.commands.get('pointer').execute(message, args);
    } else if(command ==='list') {
        client.commands.get('list').execute(message, args);
    } else if(command ==='tree') {
        client.commands.get('tree').execute(message, args);
    } else if(command ==='gr') {
        client.commands.get('gr').execute(message, args);
    } else if(command ==='wgr') {
        client.commands.get('wgr').execute(message, args);
    } else if(command ==='bot') {
        client.commands.get('bot').execute(message, args);
    } else if(command ==='trav') {
        client.commands.get('trav').execute(message, args);
    } else if(command ==='kb') {
        client.commands.get('kb').execute(message, args);
    }
});

client.login(token);
