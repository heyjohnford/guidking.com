FROM node:11.5-alpine as builder

COPY . /app
WORKDIR /app

RUN yarn install --production && yarn build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
