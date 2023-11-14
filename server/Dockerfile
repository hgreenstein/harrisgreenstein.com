FROM node:20.9-alpine AS Production

ENV NODE_ENV=production

WORKDIR /app/server

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
