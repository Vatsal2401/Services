FROM node:alpine
WORKDIR /usr/app/company_service
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]
