/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    await message.sendMessage(
        '```⚡ l AM FAST AS FUCK BOI ⚡```\n\n*🤴 Owner:*\nhttp://bit.ly/AmineSoukaraWhtsp\n\n*🤖 Version:* ```'+Config.VERSION+'```\n*👥 Telegram Group:*\nhttps://t.me/DamienHelp\n*💬 Telegram Channel:*\nhttps://t.me/DamienSoukara' , MessageType.text
    );
}));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
