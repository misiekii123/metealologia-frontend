FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN rm -rf node_modules package-lock.json
RUN npm install
COPY . .
COPY .env.production .env.production
RUN npm run build
RUN npm prune --production

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.svelte-kit/output/server build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
