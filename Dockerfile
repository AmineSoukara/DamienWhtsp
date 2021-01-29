FROM aminesoukara/damienwhtsp:latest

RUN git clone https://github.com/AmineSoukara/DamienWhtsp /root/WhatsAsena
WORKDIR /root/WhatsAsena/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies
RUN npm install

CMD ["node", "bot.js"]
