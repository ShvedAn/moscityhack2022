FROM mhart/alpine-node:latest AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build
FROM mhart/alpine-node:latest
EXPOSE 3000
RUN npm -g i serve
WORKDIR /compiled
COPY --from=builder /app/build ./
CMD serve -s /compiled