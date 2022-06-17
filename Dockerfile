FROM node:16.14.0

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm","start"]