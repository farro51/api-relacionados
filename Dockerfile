FROM node:alpine
WORKDIR /home/node/app
COPY package.json .
COPY .npmrc .
RUN npm install --production
ENV NODE_ENV #{env}#
COPY . .
USER node
EXPOSE 3001
CMD ["node", "./bin/www"]