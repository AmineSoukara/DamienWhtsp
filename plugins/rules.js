/* Copyright (C) 2020 Amine Soukara

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

DamienWhtsp - @DamienSoukara
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('damien');

Asena.addCommand({pattern: 'rules', fromMe: true, desc: Lang.RULES_DESC}, (async (message, match) => {
    await message.sendMessage(
        '*OUR WHATSAPP  GROUP  RULES & GUIDELINES*\n\n\n✅ *Do’s – Practices which are appreciated*\n\n● Every member of this group are requested to maintain the decorum of this group so that this group can fulfill the purpose\n● Do regular study and jot-down important facts and post on group whenever you get free time , Everyone must write posts only those are relevant to the group subject.\nPlease also understand and value each others time. If any one feels this group is not suitable for them, they are free to leave the group. Helps admins accommodate better focused people.\n\n\n⛔ *Don’ts – Practices which are banned by Admins:*\n\n● No jokes/quotes/ Emojis/Gif/ Stickers.... or any other irrelevant things are not  allowed to post in this group\n● Do not post anything outside the topic,Do not spam or post any irrelevant messages in the group.\n● No group invite links, Members are prohibited from sharing external group invite links in the group. Only admins will do it as and when necessary.\n● Don’t initiate any direct conversation outside the group if you don’t know him/her personally. But if you need any help from other members, you can ask from admin.\n● No post/discussion in between 11PM to 6AM\nIn larger interest, members are expected to refrain from sending messages without any defined intent of conversation – For example: ‘Good Morning’, ‘Good Night’. We need to focus on quality of discussion and not quantity.\n\n😆 Wa Akhiran Gad Group For Fun bach Nghyroha Chwiya : https://chat.whatsapp.com/CAKRgjjyPU2CTYBkOtfl3h' , MessageType.text
    );
}));
