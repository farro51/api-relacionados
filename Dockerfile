FROM node:10.16.0-alpine
WORKDIR /home/node/app
COPY package.json .
RUN npm install --production
ENV NODE_ENV production
ENV PORT 3001
COPY . .
USER node
EXPOSE 3001
CMD ["node", "./bin/www"]