FROM node:14.17.3
WORKDIR /usr/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3333
CMD yarn run dev