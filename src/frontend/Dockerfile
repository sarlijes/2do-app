FROM mcr.microsoft.com/devcontainers/javascript-node

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

CMD npx vite --host
