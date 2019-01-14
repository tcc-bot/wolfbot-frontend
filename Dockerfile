FROM node:8.15.0-alpine

LABEL maintainer 'Wolfbot <wolfbotbr@gmail.com>'

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/frontend/

WORKDIR $HOME/frontend

RUN npm install

COPY . $HOME/frontend

CMD [ "npm", "start" ]