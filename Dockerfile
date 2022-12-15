FROM node:18-alpine
WORKDIR /code-test
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY src src
COPY index.html index.html
COPY public public
COPY tsconfig.node.json tsconfig.node.json
COPY tsconfig.json tsconfig.json
COPY vite.config.ts vite.config.ts

RUN yarn 
RUN yarn build

EXPOSE 5173

CMD ["yarn", "dev"]