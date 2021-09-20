FROM node:14 as builder
RUN mkdir /usr/src/app

COPY ./package.json /usr/src/app
WORKDIR /usr/src/app
RUN npm i

COPY ./src /usr/src/app/src
COPY ./tsconfig.json /usr/src/app/
COPY ./webpack.config.js /usr/src/app/
RUN npx webpack


FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y && apt install -y nginx
RUN mkdir /var/www/dashboard

COPY --from=builder /usr/src/app/dist/ /var/www/dashboard/dist/
COPY ./*.html /var/www/dashboard/
COPY ./img/ /var/www/dashboard/img/
COPY ./docker/nginx.conf /etc/nginx/sites-available/nginx.conf
COPY ./widgets.json /var/www/dashboard/
copy ./config.json /var/www/dashboard/

COPY ./ /var/www/dashboard/
COPY ./docker/run.sh /app/run.sh
RUN chmod a+rwx /app/run.sh

RUN ln -s /etc/nginx/sites-available/nginx.conf /etc/nginx/sites-enabled/nginx.conf
RUN rm -f /etc/nginx/sites-enabled/default

EXPOSE 80
CMD ["/bin/bash", "-c", "/app/run.sh"]