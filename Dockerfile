#Dockerfile##################################
FROM node:16.14.0
MAINTAINER Jan Botha
LABEL PokeJan API
WORKDIR /app
COPY . /app
EXPOSE 3046
CMD [ "node", "index.js" ]
#Dockerfile#################################
