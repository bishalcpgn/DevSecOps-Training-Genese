# Stage 1: Build the React application
FROM node:20-alpine as builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./ 
RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

