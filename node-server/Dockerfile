FROM node:14

WORKDIR /app

COPY package*.json /app
# Ensure yarn is available in the base image
RUN npm install -g yarn \
	&& yarn install

EXPOSE 8001

CMD [ "yarn", "start" ]
