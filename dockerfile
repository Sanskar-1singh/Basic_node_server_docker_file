FROM node
WORKDIR /desktop/nodejs/my-server

COPY . .
RUN npm ci

ENV PORT=3000

CMD ["npm","start"]


