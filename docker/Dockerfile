FROM node:latest

WORKDIR /opt/app

RUN npm init -y
RUN npm install @11ty/eleventy

COPY . .

CMD [ "npx", "@11ty/eleventy" ]
