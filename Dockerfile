FROM node:16-alpine3.14

WORKDIR /work/

COPY ./package.json /work/package.json

RUN npm install

COPY . /work/

CMD node .
