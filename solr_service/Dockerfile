FROM node:alpine
WORKDIR /usr/app/employee_service
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]
