FROM nginx:latest

# RUN apt update && apt upgrade -y && apt install vim -y

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

RUN mkdir /usr/src/app -p && touch /usr/src/app/index.js