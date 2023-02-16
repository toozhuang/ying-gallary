#增加docker的支持， 可以一键部署
FROM node:14 as build-deps

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build


FROM nginx:1.21-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

# 构建命令为:  docker build -t ying-gallary .
# 运行命令为： docker run -p 3000:80 -d ying-gallary
