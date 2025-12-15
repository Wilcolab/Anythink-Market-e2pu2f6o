FROM node:14

WORKDIR /app

COPY package*.json /app
# Ensure yarn is available without failing if preinstalled
RUN if ! command -v yarn >/dev/null 2>&1; then npm install -g yarn; fi \
	&& yarn install

EXPOSE 8001

CMD [ "yarn", "start" ]
