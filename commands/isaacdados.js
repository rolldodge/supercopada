exports.run = (client, message, args) => {
    message.channel.sendMessage(":game_die: 1- Cambia de forma aleatoria TODOS tus objetos y existe la posibilidad que se otorgue un objeto extra.\n\:game_die: 2-Cambia de forma aleatoria todos los consumibles que haya en la habitación.\n\:game_die: 3-Cambia todos los objetos consumibles que haya en toda la planta.\n\:game_die: 4-Cambia todos los objetos que estén en pedestal salvo los del Devil room.\n\:game_die: 5-Comienzas el nivel desde el principio siendo este reseteado y cambiado por completo (esto seria interesante de hacer para obtener objetos y mejoras extra).\n\:game_die: 6-Cambia aleatoriamente todos tus objetos y los objetos que estén en la planta.");
    message.channel.sendMessage('Buen rng!');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['isaacdados', 'dadosisaac'],
  permLevel: 0
};

exports.help = {
  name: 'Isaac Dados',
  description: 'Dice el efecto de cada habitacion de dado',
  usage: 'isaacdados'
};