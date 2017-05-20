exports.run = (client, message, args) => {
    let valor = Math.floor((Math.random() * (20) + 1));
    switch(valor) {
    case 1:
         message.channel.sendMessage(":8ball: En mi opinión, si");
        break;
    case 2:
         message.channel.sendMessage(":8ball: Es cierto");
        break;
    case 3:
        message.channel.sendMessage(":8ball: Es decididamente así");
        break;
    case 4:
        message.channel.sendMessage(":8ball: Probablemente");
        break;
    case 5:
        message.channel.sendMessage(":8ball: Buen pronóstico");
        break;
    case 6:
        message.channel.sendMessage(":8ball: Todo apunta a que si");
        break;
    case 7:
        message.channel.sendMessage(":8ball: Sin duda");
        break;
    case 8:
        message.channel.sendMessage(":8ball: Si");
        break;
    case 9:
        message.channel.sendMessage(":8ball: Si - definitivamente");
        break;
    case 10:
        message.channel.sendMessage(":8ball: Debes confiar en ellos");
        break;
    case 11:
        message.channel.sendMessage(":8ball: Respuesta vaga, vuelve a intentarlo");
        break;
    case 12:
        message.channel.sendMessage(":8ball: Pregunta en otro momento");
        break;
    case 13:
        message.channel.sendMessage(":8ball: Será mejor que no te lo diga ahora");
        break;
    case 14:
        message.channel.sendMessage(":8ball: No puedo predecirlo ahora");
        break;
    case 15:
        message.channel.sendMessage(":8ball: Concéntrate y vuelve a preguntar");
        break;
    case 16:
        message.channel.sendMessage(":8ball: No cuentes con ello");
        break;
    case 17:
        message.channel.sendMessage(":8ball: Mi respuesta es no");
        break;
    case 18:
        message.channel.sendMessage(":8ball: Mis fuentes dicen que no");
        break;
    case 19:
        message.channel.sendMessage(":8ball: Las perspectivas no son buenas");
        break;
    case 20:
        message.channel.sendMessage(":8ball: Muy dudoso");
        break;                        
    default:
        message.channel.sendMessage(":8ball: Hubo un error en algun lado, no me preguntes donde");
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bola8', '8ball'],
  permLevel: 0
};

exports.help = {
  name: 'Bola 8',
  description: 'Obtenes una respuesta de bola 8',
  usage: 'bola8'
};