FROM node:16-buster as builder
RUN mkdir /usr/src/app

COPY ./package.json /usr/src/app
WORKDIR /usr/src/app
RUN npm i

COPY ./src /usr/src/app/src
COPY ./tsconfig.json /usr/src/app/
COPY ./webpack.config.js /usr/src/app/
RUN npx webpack


FROM nginx:1.21.1-alpine
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html/dist/
COPY ./*.html /usr/share/nginx/html/
COPY ./img/ /usr/share/nginx/html/img/
COPY ./docker/nginx.conf /etc/nginx/sites-available/nginx.conf
COPY ./widgets.json /usr/share/nginx/html/
COPY ./config.json /usr/share/nginx/html/