FROM node as angular

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build

FROM nginx as nginx

COPY --from=angular /usr/local/app/dist/angularDocker /usr/share/nginx/html

EXPOSE 80
