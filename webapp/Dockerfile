FROM node:6.9.5-alpine
RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm install -g yarn  \
	&& yarn install \
	&& yarn start
EXPOSE 3000


