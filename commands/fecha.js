exports.run = (client, message, args) => {
    //var today = new Date();
    //today.setFullYear();
    message.channel.sendMessage (`${new Date()}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fecha', 'hoy'],
  permLevel: 0
};

exports.help = {
  name: 'fecha',
  description: 'Dice la fecha',
  usage: 'fecha'
};