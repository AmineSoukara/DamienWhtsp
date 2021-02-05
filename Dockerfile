FROM fusuf/whatsasena:latest

RUN git clone https://github.com/AmineSoukara/DamienWhtsp /root/DamienWhtsp
WORKDIR /root/DamienWhtsp/
ENV TZ=Europe/Istanbul
RUN npm install deepai
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
