# Usar a imagem oficial do Node.js
FROM node:18

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar arquivos de dependência
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expôr a porta da aplicação (ajuste se for diferente)
EXPOSE 3000

# Rodar em modo dev
CMD ["npm", "run", "dev"]
