FROM node:20 AS base

ARG VITE_BACKEND_URL

ENV VITE_BACKEND_URL="/"

WORKDIR /usr/src/app

FROM base AS build

COPY . .

RUN npm ci

RUN npm run build

FROM base AS prod

COPY --from=build /usr/src/app/package.json /usr/src/app/package.json

COPY --from=build /usr/src/app/vite.config.js /usr/src/app/vite.config.js

COPY --from=build /usr/src/app/dist /usr/src/app/dist

RUN npm install vite

CMD [ "npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173" ]