FROM node:latest

WORKDIR /opt/app

RUN npm init -y
RUN npm install @11ty/eleventy

COPY ./src .

CMD [ "npx", "@11ty/eleventy" ]
