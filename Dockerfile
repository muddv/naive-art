FROM node:16
WORKDIR /app

COPY package*.json yarn.lock* ./

RUN npm i

COPY . ./

RUN npm run build

ENV PORT=5000

EXPOSE 5000

CMD [ "npm", "start" ]
