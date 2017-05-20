exports.run = (client, message, args) => {
     message.channel.sendMessage("MUDA 無駄 MUDA 無駄 MUDA 無駄 MUDA 無駄");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ora', 'ORA'],
  permLevel: 0
};

exports.help = {
  name: 'ORA',
  description: 'Da una respuesta acorde',
  usage: 'ORA'
};