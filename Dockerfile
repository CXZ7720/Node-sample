FROM node:current-alpine

WORKDIR /usr/src/super-strong-password
COPY package*.json ./
RUN yarn install

copy . .
EXPOSE 3000

CMD ["yarn", "start"]