
FROM node:18

WORKDIR /APP

COPY "./package*.json" ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npx","serve","-s","dist"]