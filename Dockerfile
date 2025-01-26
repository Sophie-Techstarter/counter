## Multi Stage Build 

FROM node:22-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./  

RUN npm install

COPY . .  

RUN npm run build  

# Produktionsumgebung

FROM nginx:stable-alpine 

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]