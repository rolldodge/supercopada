module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Se fue ${member.user.username}, una lastima. Igual seguro era un bot que metio Félix...`);
};
