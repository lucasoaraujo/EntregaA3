# Eletroword - Gerenciador para Lojas de Eletrônicos

![JS](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)
![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge)

---

## 📘 Sobre o Projeto

O **Eletroword** é um sistema desenvolvido para a disciplina de **Sistemas Distribuídos e Mobile**, com o objetivo de simular a operação de uma rede de lojas de eletrônicos. Ele oferece funcionalidades para gestão de clientes, vendedores, produtos, pedidos e relatórios em uma arquitetura modular e containerizada com Docker.

---

## 👥 Equipe Desenvolvedora

- 🎓 **Anselmo Raimundo dos S. C. Nascimento** — RA: 12723116545  
- 🎓 **Carlos Henrique Santos Alves** — RA: 1272328055  
- 🎓 **Douglas Eloi Conceição Lima** — RA: 1272310473  
- 🎓 **Lucas Batista de Oliveira Araujo** — RA: 1272327463  

---

## 🛠️ Tecnologias Utilizadas

- Node.js com Express.js  
- Sequelize ORM  
- MySQL  
- Docker e Docker Compose  

---

## 🔍 Funcionalidades

- CRUD de clientes  
- CRUD de vendedores  
- Cadastro e controle de produtos e estoque  
- Processamento e cancelamento de pedidos  
- Geração de relatórios personalizados

### 🚀 Executando o Projeto com Docker

## ✅ Pré-requisitos 
- Docker
- Docker Compose

## ⚙️ Passos

- git clone https://github.com/lucasoaraujo/EntregaA3.git
- cd EntregaA3
- docker-compose up --build -d

## 🔧 Execução das Migrações e Seeders

## Após os containers estarem ativos, execute os comandos:

- docker-compose exec app npx sequelize-cli db:migrate
- docker-compose exec app npx sequelize-cli db:seed:all

---

## ⚙️ Configuração do Ambiente

Antes de rodar o projeto, crie um arquivo `.env` na raiz com o seguinte conteúdo:

```env
DB_HOST=db
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=eletroword_db
DB_PORT=3306
