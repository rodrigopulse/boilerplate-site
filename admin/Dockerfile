FROM node:14.17.3
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD yarn run start