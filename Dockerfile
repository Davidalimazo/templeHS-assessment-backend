
FROM node:alpine
RUN npm install -g nodemon
RUN npm install -g prettier
RUN npm install -g eslint
WORKDIR /app

COPY package.json .
RUN npm install 
COPY . .

ENV DATABASE_URL=${DATABASE_URL} \
    PGHOST=${PGHOST} \
    PGPORT=${PGPORT}\
    PORT=${PORT} \
    PGPASSWORD=${PGPASSWORD} \
    PGUSER=${PGUSER} \
    PGDATABASE=${PGDATABASE}

EXPOSE 8080

ENTRYPOINT [ "npm" ]
CMD [ "start" ]