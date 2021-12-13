FROM node:16.0.0

RUN mkdir -p /crud/back
WORKDIR /crud/back

COPY package*.json /crud/back
RUN npm install

COPY . /crud/back

EXPOSE 8000
CMD npm run dev