FROM node:20

ARG RSS_BASE_URL

ENV RSS_BASE_URL="/usr/src/app/tests/news/"

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]