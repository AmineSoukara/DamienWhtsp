/*Edited By @AmineSoukara
Telegram: t.me/AmineSoukara 
Instagram: www.instagram.com/AmineSoukara 
*/

const Asena = require('../events');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Asena.addCommand({pattern: '1mute', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 1 minute!*');

    await new Promise(r => setTimeout(r, 60000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '2mute', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 2 minute!*');

    await new Promise(r => setTimeout(r, 120000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '5mute', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 5 minute!*');

    await new Promise(r => setTimeout(r, 300000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '10mute', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 10 minute!*');

    await new Promise(r => setTimeout(r, 600000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '20mute', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 20 minute!*');

    await new Promise(r => setTimeout(r, 1200000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '30mute', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for 30 minute!*');

    await new Promise(r => setTimeout(r, 1800000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '60mute', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for one hours!*');

    await new Promise(r => setTimeout(r, 3600000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: '24Hmute', fromMe: true, onlyGroup: true}, (async (message, match) => {
    
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage('*I am not admin this group.*');
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendMessage('*Group chat shut down for one day!*');

    await new Promise(r => setTimeout(r, 86400000));
    
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendMessage('*Well Boss. Chat opened again!*');

}));

Asena.addCommand({pattern: 'infomute', fromMe: true,}, (async (message, match) => {

    await message.sendMessage('*Codded By : @DamienSoukara \n🇬🇧 Closes The Chat.\n\n💻Usage: *.1mute*\n💻Usage: *.2mute*\n💻Usage: *.5mute*\n💻Usage: *.10mute*\n💻Usage: *.20mute*\n💻Usage: *.30mute*\n💻Usage: *.60mute*\n💻Usage: *.24Hmute*');                

}));

