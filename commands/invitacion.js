exports.run = (client, message, args ) => {
    message.channel.sendMessage ("https://discord.gg/gYpGsFH");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Invitacion', 'invitation'],
  permLevel: 0
};

exports.help = {
  name: 'Invitacion',
  description: 'Da el link de una invitacion permanente del servidor.',
  usage: 'invitacion'
};