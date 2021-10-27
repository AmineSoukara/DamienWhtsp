FROM fusuf/whatsasena:latest

RUN git clone https://github.com/AmineSoukara/DamienWhtsp /root/DamienWhtsp

WORKDIR /root/DamienWhtsp

ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
