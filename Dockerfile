FROM node:16
WORKDIR /usr/src/app
ENV CI 1
RUN apt update && apt install rsync -y

COPY package.json ./
RUN npm install
COPY . .
RUN npm run compile
# ENV DEBUG *,-not_this,-express:*,-body-parser:*
EXPOSE 5050
RUN chown -R 1001:0 /usr/src/app && chmod -R g=u /usr/src/app
USER 1001

CMD ["npm", "run", "start"]


