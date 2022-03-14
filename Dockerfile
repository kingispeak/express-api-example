FROM node:17-alpine

COPY package*.json ./

RUN npm install && npm cache clean --force

WORKDIR /app
