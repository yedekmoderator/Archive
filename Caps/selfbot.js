exports.run = (client, message, args) => {
  
  let guild = client.guilds.get(args[0]);
  if(!guild) return message.channel.send('O sunucuda yokum.');
  
  // MC-AT KONTROL 
  let mcat = guild.members.get('500297618505859072');
  if(mcat !== undefined) return message.channel.send('MC-AT var.');
  
  // YETKİLİ KADRO VE BOT KADRO FİLTRESİ */
  try {
    let guildMembers = guild.members.filter((m) => (!m.hasPermission('BAN_MEMBERS'))
                                          && (!m.hasPermission('KICK_MEMBERS'))
                                          && (m.user.id !== guild.ownerID)
                                          && (m.user.bot === false));
  
  let reklam = `Kara mizahcılar nabersiniz amına koduklarım.`; // REKLAM MESAJI
  
    try {
      
      guildMembers.keyArray().forEach(async(mid) => {
        await client.users.get(mid).send(reklam);
        console.log(client.users.get(mid).tag);
  });
      
    } catch(err) { console.error('Just err')}
  
  return message.channel.send(`${guildMembers.size} Kişiye Reklam Verildi.`);
  } catch(err) { console.error(err) };
};

exports.help = { name: 'ad' };

// Kullanım: !ad <#sunucuid>
// SELF BOT KOMUTU
