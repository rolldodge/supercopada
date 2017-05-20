const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let puto = message.mentions.users.first();
  puto.user.addRole();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['alrincon', 'al rincon'],
  permLevel: 2
};

exports.help = {
  name: 'alrincon',
  description: 'asdas',
  usage: 'asdasdasd'
};