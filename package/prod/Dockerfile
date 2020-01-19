FROM node:lts as BUILD
WORKDIR /root/express-hello
COPY . .
RUN package/prod/build.sh

FROM node:lts-alpine as APP
ENV NODE_ENV=production
ENV PORT=80
ENV HOSTNAME=localhost
WORKDIR /root/express-hello
COPY --from=BUILD /root/express-hello/node_modules ./node_modules
COPY --from=BUILD /root/express-hello/package* ./
COPY --from=BUILD /root/express-hello/build ./build
CMD npm start
