exports.run = (client, message, args) => {
     let ditto = args.slice(0).join(' ');
     if (ditto.length < 1) return message.reply('tenes que incluir un mensaje para que pueda repetirlo, down');
     message.delete();
     message.channel.sendMessage(ditto);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['di', 'repeti'],
  permLevel: 0
};

exports.help = {
  name: 'deci',
  description: 'El bot repite lo que dijiste.',
  usage: 'deci [lo que queres que el bot diga]'
};