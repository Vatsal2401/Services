FROM node:alpine
WORKDIR /usr/app/auth_service
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]
