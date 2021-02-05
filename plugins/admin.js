/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Asena = require('../events');

const Language = require('../language');
const Lang = Language.getString('admin');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Asena.addCommand({pattern: 'rules', fromMe: true, desc: Lang.RULES}, (async (message, match) => {
    await message.sendMessage(
        '*OUR WHATSAPP  GROUP  RULES & GUIDELINES*\n\n\n✅ *Do’s – Practices which are appreciated*\n\n● Every member of this group are requested to maintain the decorum of this group so that this group can fulfill the purpose\n● Do regular study and jot-down important facts and post on group whenever you get free time , Everyone must write posts only those are relevant to the group subject.\nPlease also understand and value each others time. If any one feels this group is not suitable for them, they are free to leave the group. Helps admins accommodate better focused people.\n\n\n⛔ *Don’ts – Practices which are banned by Admins:*\n\n● No jokes/quotes/ Emojis/Gif/ Stickers.... or any other irrelevant things are not  allowed to post in this group\n● Do not post anything outside the topic,Do not spam or post any irrelevant messages in the group.\n● No group invite links, Members are prohibited from sharing external group invite links in the group. Only admins will do it as and when necessary.\n● Don’t initiate any direct conversation outside the group if you don’t know him/her personally. But if you need any help from other members, you can ask from admin.\n● No post/discussion in between 11PM to 6AM\nIn larger interest, members are expected to refrain from sending messages without any defined intent of conversation – For example: ‘Good Morning’, ‘Good Night’. We need to focus on quality of discussion and not quantity.\n\n😆 Wa Akhiran Gad Group For Fun bach Nghyroha Chwiya : https://chat.whatsapp.com/CAKRgjjyPU2CTYBkOtfl3h' , MessageType.text
    );
}));


Asena.addCommand({pattern: 'ban ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.BAN_DESC}, (async (message, match) => {  
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (message.reply_message !== false) {
        await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
        await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
    } else if (message.reply_message === false && message.mention !== false) {
        var etiketler = '';
        message.mention.map(async (user) => {
            etiketler += '@' + user.split('@')[0] + ',';
        });

        await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: message.mention}});
        await message.client.groupRemove(message.jid, message.mention);
    } else {
        return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
    }
}));

Asena.addCommand({pattern: 'kick ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.BAN_DESC}, (async (message, match) => {  
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (message.reply_message !== false) {
        await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
        await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
    } else if (message.reply_message === false && message.mention !== false) {
        var etiketler = '';
        message.mention.map(async (user) => {
            etiketler += '@' + user.split('@')[0] + ',';
        });

        await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: message.mention}});
        await message.client.groupRemove(message.jid, message.mention);
    } else {
        return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
    }
}));

/* Asena.addCommand({pattern: 'add(?: |$)(.*)', fromMe: true, onlyGroup: true, desc: Lang.ADD_DESC}, (async (message, match) => {  
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    
    if (match[1] !== '') {
        match[1].split(' ').map(async (user) => {
            await message.client.groupAdd(message.jid, [user + "@s.whatsapp.net"]);
            await message.client.sendMessage(message.jid,'```' + user + ' ' + Lang.ADDED +'```');
        });
    } else {
        return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
    }
}));
*/

Asena.addCommand({pattern: 'add(?: |$)(.*)', fromMe: true, onlyGroup: true, desc: Lang.ADD_DESC, usage: '.add 905xxxxxxxxx'}, (async (message, match) => {  
    var im = await checkImAdmin(message);
    if (!im) return await message.sendMessage(Lang.IM_NOT_ADMIN);
    
    if (match[1] !== '') {
        match[1].split(' ').map(async (user) => {
            await message.client.groupAdd(message.jid, [user + "@s.whatsapp.net"]);
            await message.sendMessage('```'+ Lang.AD +' ' + user + ' ' + Lang.ADDED +'```');
        });
    } else {
        return await message.sendMessage(Lang.GIVE_ME_USER);
    }
}));

Asena.addCommand({pattern: 'promote ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.PROMOTE_DESC}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (message.reply_message !== false) {
        var checkAlready = await checkImAdmin(message, message.reply_message.data.participant);
        if (checkAlready) {
            return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
        }

        await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Lang.PROMOTED, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
        await message.client.groupMakeAdmin(message.jid, [message.reply_message.data.participant]);
    } else if (message.reply_message === false && message.mention !== false) {
        var etiketler = '';
        message.mention.map(async (user) => {
            var checkAlready = await checkImAdmin(message, user);
            if (checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
            }

            etiketler += '@' + user.split('@')[0] + ',';
        });

        await message.client.sendMessage(message.jid,etiketler + Lang.PROMOTED, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
        await message.client.groupMakeAdmin(message.jid, message.mention);
    } else {
        return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
    }
}));

Asena.addCommand({pattern: 'demote ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.DEMOTE_DESC}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN);

    if (message.reply_message !== false) {
        var checkAlready = await checkImAdmin(message, message.reply_message.data.participant.split('@')[0]);
        if (!checkAlready) {
            return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
        }

        await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Lang.DEMOTED, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
        await message.client.groupDemoteAdmin(message.jid, [message.reply_message.data.participant]);
    } else if (message.reply_message === false && message.mention !== false) {
        var etiketler = '';
        message.mention.map(async (user) => {
            var checkAlready = await checkImAdmin(message, user);
            if (!checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
            }
            
            etiketler += '@' + user.split('@')[0] + ',';
        });

        await message.client.sendMessage(message.jid,etiketler + Lang.DEMOTED, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
        await message.client.groupDemoteAdmin(message.jid, message.mention);
    } else {
        return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
    }
}));

Asena.addCommand({pattern: 'mute ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.MUTE_DESC}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.client.sendMessage(message.jid,Lang.MUTED,MessageType.text);
}));

Asena.addCommand({pattern: 'unmute ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.UNMUTE_DESC}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.client.sendMessage(message.jid,Lang.UNMUTED,MessageType.text);
}));

Asena.addCommand({pattern: 'invite ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.INVITE_DESC}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN, MessageType.text);
    var invite = await message.client.groupInviteCode(message.jid);
    await message.client.sendMessage(message.jid,Lang.INVITE + ' https://chat.whatsapp.com/' + invite, MessageType.text);
}));

module.exports = {
    checkImAdmin: checkImAdmin
};
