FROM node:lts as BUILD
WORKDIR /root/express-hello
COPY . .
RUN npm ci
CMD npm test