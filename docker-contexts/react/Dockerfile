FROM node:15

WORKDIR /app

COPY ./client/package.json /app
COPY ./client/yarn.lock /app

# Install all the node_modules dependencies
RUN yarn install

COPY ./client /app
