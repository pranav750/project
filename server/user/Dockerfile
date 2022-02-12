FROM node:16.14.0

RUN mkdir -p /app/server/user

WORKDIR /app/server/user

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]