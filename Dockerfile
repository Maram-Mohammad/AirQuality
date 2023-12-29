FROM node:16

WORKDIR /usr/src/app

ENV CI 1

COPY package*.json ./
RUN npm ci

COPY . .
WORKDIR /usr/src/app
RUN npm install
RUN npm run compile
ENV DEBUG *,-not_this,-express:*,-body-parser:*
EXPOSE 5050

RUN chown -R 1001:0 /usr/src/app && chmod -R g=u /usr/src/app
USER 1001

CMD ["npm", "run", "start"]


