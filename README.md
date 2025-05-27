
# 📋 Projeto de Integração com Google Sheets

Este projeto é uma API backend desenvolvida com **Node.js + Express** que se conecta a uma planilha do Google Sheets utilizando a biblioteca oficial `googleapis`.

---

## 🚀 Funcionalidades

- Obter metadados da planilha  
- Ler registros da aba `Leads` via rota GET
- Adicionar novos dados na aba `Leads` via rota POST

---

## 🛠️ Tecnologias utilizadas

- Node.js  
- Express  
- Google Sheets API  
- dotenv

---

## ⚙️ Instalação

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/backend
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configure as variáveis de ambiente:

Crie um arquivo chamado `.env` na pasta `backend` com o seguinte conteúdo:

```ini
GOOGLE_CREDENTIALS_PATH=./Credentials.json
```

### 4. Adicione o arquivo de credenciais do Google:

Você precisará do arquivo `Credentials.json` (tipo: `service_account`) com permissão de acesso à planilha desejada.

- Solicite este arquivo ao desenvolvedor do projeto **ou**  
- Crie o seu no [Google Cloud Console](https://console.cloud.google.com/)

> **Importante:** Compartilhe a planilha com o e-mail da conta de serviço (campo `client_email` do JSON).

---

## ▶️ Como rodar o projeto

### Com Node:

```bash
node index.js
```

### Ou, se estiver usando nodemon:

```bash
npx nodemon index.js
```

A aplicação estará disponível em:

```
http://localhost:3001
```

---

## 📌 Rotas disponíveis
  
- `GET /getRows` → Linhas da aba `Leads`
- `POST /addRow` → Adiciona linhas na aba `Leads`

---

## 🔐 Segurança

- O arquivo `Credentials.json` e o `.env` estão listados no `.gitignore`  
- Esses arquivos **não são enviados ao repositório público**

---
