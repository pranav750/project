FROM node

RUN mkdir -p /app/server/user

WORKDIR /app/server/user

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]