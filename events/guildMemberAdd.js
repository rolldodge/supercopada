module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Bienvenido ${member.user.username} al servidor super copado. Igual seguro sos un bot que invito Félix...`);
};
