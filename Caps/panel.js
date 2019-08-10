client.on('guildMemberAdd', m => {
  
  let channel = client.channels.get('606106042816004143');
  channel.setName(`🍕${m.guild.memberCount} Pizza bulunuyor`);

});

client.on('guildMemberRemove', m => {
  
  let channel = client.channels.get('606106042816004143');
  channel.setName(`🍕${m.guild.memberCount} Pizza bulunuyor`);
  
});
// Panel
