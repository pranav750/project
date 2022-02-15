FROM node

RUN mkdir -p /app/client

WORKDIR /app/client

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]