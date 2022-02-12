FROM node:16.14.0

RUN mkdir -p /app/client

WORKDIR /app/client

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]