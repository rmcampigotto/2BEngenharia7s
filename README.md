# ✅ ToDo List API

A **ToDo List API** é uma aplicação RESTful desenvolvida com NestJS que permite o gerenciamento de tarefas pessoais e organizacionais. Ideal para integrar com front-ends web ou mobile, a API oferece recursos robustos como autenticação JWT, prioridade de tarefas, controle de status e categorias customizáveis.

---

## 🎯 Objetivo

Fornecer uma API simples, modular e escalável que permita:

- Criar, listar, atualizar e deletar tarefas
- Organizar tarefas por status e prioridade
- Autenticar usuários via JWT
- Armazenar logs para auditoria e análise futura

---

## 🔧 Funcionalidades

### 🔹 Autenticação
- Cadastro e login de usuários
- JWT com expiração configurável
- Guardas de rota para proteger endpoints privados

### 🔹 Tarefas
- CRUD completo de tarefas
- Campos: título, descrição, status (`pendente`, `em progresso`, `concluída`), prioridade (`baixa`, `média`, `alta`), data de vencimento
- Filtro por status, prioridade ou data

### 🔹 Categorias
- Permite agrupar tarefas por categorias (ex: "Faculdade", "Trabalho")
- CRUD de categorias

### 🔹 Logs
- Toda ação relevante (criação, atualização, exclusão de tarefas) é salva no MongoDB

---

## 📦 Estrutura de Módulos

- `auth`: Login, registro e autenticação
- `users`: Gerenciamento de usuários
- `tasks`: CRUD de tarefas
- `categories`: CRUD de categorias
- `logs`: Registro de atividades no MongoDB

---

## 🧪 Exemplo de Objeto de Tarefa

```json
{
  "title": "Estudar NestJS",
  "description": "Estudar injeção de dependência e módulos",
  "status": "em progresso",
  "priority": "alta",
  "dueDate": "2025-06-15T23:59:59.000Z",
  "categoryId": "c1f9e312"
}
```

---

## ⚙️ Tecnologias Utilizadas

- **NestJS** – Framework backend principal
- **PostgreSQL** – Banco relacional para dados estruturados
- **MongoDB** – Banco NoSQL para logs
- **TypeORM** – ORM para PostgreSQL
- **Mongoose** – ODM para MongoDB
- **JWT** – Autenticação
- **Docker** – Containerização para facilitar o deploy

---

## 🔐 Segurança

- Criptografia de senhas com Bcrypt
- Autenticação JWT protegendo todas as rotas privadas
- CORS configurado para integração com aplicações externas

---

## 🚀 Como Executar

```bash
# Clonar o projeto
git clone https://github.com/seuusuario/todo-list-api

# Entrar no diretório
cd todo-list-api

# Instalar dependências
npm install

# Rodar o banco via Docker
docker compose up -d

# Iniciar a API
npm run start:dev
```

---

## 📘 Documentação Swagger

Disponível em:

```
http://localhost:3000/api
```

---

## 📄 Licença

MIT. Uso livre para projetos pessoais e comerciais com atribuição.