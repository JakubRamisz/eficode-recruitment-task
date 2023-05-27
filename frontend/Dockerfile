FROM node:16-alpine
WORKDIR /frontend
ADD package.json /frontend
RUN npm i
ENV ENDPOINT=$ENDPOINT
ADD . /frontend
CMD npm start
EXPOSE 8000