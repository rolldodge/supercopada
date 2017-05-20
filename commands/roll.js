exports.run = (client, message, args) => {
     //let dadoyrolls = args.slice(0, 2, 3).join(' '); ESTO NO, NO ME FUNCIONO
     let dadoyrolls = message.content.split(" ").slice(1);
     //rolls v
     //message.channel.sendMessage ("arg 1" + dadoyrolls[0]);
     //dado v
     //message.channel.sendMessage ("arg 2" +dadoyrolls[1]);
     let number = 0;
     let i = 0;
     
     let chequeonumero = isNaN(dadoyrolls[0]);
     let chequeootronumero = isNaN(dadoyrolls[1]);

     if(dadoyrolls[1] == undefined || chequeootronumero == true) {
       dadoyrolls[1] = 1;
     }
     
     if (chequeonumero == true){
      message.channel.sendMessage("La cantidad de caras del dado ingresadas no es un numero, volve a intentar, down.");
      return; 
     }

     if (dadoyrolls[1] > 5){
       dadoyrolls[1] = 4;
       message.channel.sendMessage("Dice máximo 5, down.")
     }
     
     while ( i < dadoyrolls[1]) {
       number = Math.floor((Math.random() * (dadoyrolls[0]) + 1));
       //message.channel.sendMessage(carasdedado);
       message.channel.sendMessage(`:game_die: ${number}`);
      i++;
     }
    
    //number = Math.floor((Math.random() * carasdedado) + 1);
    //message.channel.sendMessage(`d${carasdedado}`);
    //message.channel.sendMessage(`:game_die: ${number}`); 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['roll', 'rolls'],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Tira un dado de "x" caras "y" veces (máximo 5 veces). Si no se ingresa cantidad de tiros se tirara el dado al menos una vez.',
  usage: 'roll x y'
};