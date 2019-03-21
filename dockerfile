FROM node

WORKDIR /app

ADD . .

RUN yarn

CMD yarn start