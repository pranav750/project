FROM node

RUN mkdir -p /app/server/content

WORKDIR /app/server/content

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "start"]