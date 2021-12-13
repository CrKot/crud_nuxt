FROM node:16.0.0

RUN mkdir -p /crud/front
WORKDIR /crud/front

COPY package*.json /crud/front
RUN npm install

COPY . /crud/front

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000
CMD npm run start