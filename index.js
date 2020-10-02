const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';



const cmd_math_channel_show = 'azucarsalado07';
const cmd_math_channel_show_time = 60000;




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();
  	if (command == cmd_math_channel_show) {

	    let miembro = message.member;
	    let nombrerol = args.slice(0).join(' ');
	    let time_ = args.slice(1).join(' ');
	    let time = parseInt(time_, 10);

	    if(time==null)time=cmd_math_channel_show_time;

	    let role = message.guild.roles.cache.find(role => role.name === nombrerol);
	    let perms = message.member.hasPermission("ADMINISTRATOR");
	    
	    miembro.roles.add(role);

	    setTimeout(() => {  miembro.roles.remove(role); }, cmd_math_channel_show_time);

  	}
});

client.login('NzYwNTM3MTI3NjY2MTg4Mjg5.X3NfZQ.DLRHh3vTKHhM7d5G3ugCE7MEK8o');