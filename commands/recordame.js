const moment = require('moment');
exports.run = (client, message, args) => {
    var cosasdelrecodatorio = message.content.split(" ").slice(1);
    var today = moment();
    //var myVar = setInterval(function(){ myTimer() }, 60000);
    let ditto = args.slice(1).join(' ');
    var recfecha= today.clone().add(cosasdelrecodatorio[0], 'minutes');
    console.log(today);
    console.log(recfecha)
    console.log(cosasdelrecodatorio[0]);//TIEMPO
    //console.log(ditto);//LO QUE RECORDAR
    message.reply(ditto);
    console.log("recordatorio hecho");
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['recordame', 'recordamehacer'],
  permLevel: 0
};

exports.help = {
  name: 'recordame',
  description: 'tu vi eja a',
  usage: 'who knows'
};