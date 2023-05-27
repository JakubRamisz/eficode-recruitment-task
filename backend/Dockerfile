FROM node:16-alpine
WORKDIR /backend
ADD package.json /backend
RUN npm i
ENV APPID=$APPID
ADD . /backend
CMD npm start
EXPOSE 9000