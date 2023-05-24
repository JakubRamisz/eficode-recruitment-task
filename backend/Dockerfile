FROM node:16-alpine
WORKDIR /backend
COPY . .
RUN npm i
ENV APPID=$APPID
CMD npm start
EXPOSE 9000