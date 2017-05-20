const Discord = require('discord.js');
exports.run = (client, message, args) => {
      let ditto = args.slice(0).join(' ');
      client.user.setGame(ditto);
      message.channel.sendMessage(`Juego efectivamente cambiado a *${ditto}*`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setgame'],
  permLevel: 2
};

exports.help = {
  name: 'setgame',
  description: 'Cambia el "jugando" del bot',
  usage: 'set game [lo que queres que diga]'
};