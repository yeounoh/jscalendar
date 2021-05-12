FROM node:12.13.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . /opt/app/
RUN npm install
EXPOSE 3000
EXPOSE 27017
CMD [ "npm", "start"]