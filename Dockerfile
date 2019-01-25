FROM node:11.5-alpine

# RUN addgroup -S guid-king && adduser -S guid-king -G guid-king
# USER guid-king

COPY . /app
WORKDIR /app

RUN yarn
# RUN npm install --production

ENV NODE_ENV production

EXPOSE 8000

CMD ["npm", "start"]
