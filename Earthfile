VERSION 0.7
FROM node:18-slim
WORKDIR app

dep:
    COPY package.json .
    RUN yarn install

build:
    FROM +dep
    COPY . . 
    RUN yarn generate
    SAVE ARTIFACT .output

container: 
    ARG tag
    FROM nginx:alpine
    COPY +build/.output/public/. /usr/share/nginx/html
    COPY conf/nginx.conf /etc/nginx/nginx.conf
    SAVE IMAGE harbor.herren5.ch/remmen/website:$tag