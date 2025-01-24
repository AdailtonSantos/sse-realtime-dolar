# 💵 Dólar em Tempo Real

Sistema que puxa a cotação do dólar via API a cada 1 minuto e meio e exibe no front através do **SSE (Server Sent Events)**.

---

## 🚀 Execução

### 1. Instale as dependências

Certifique-se de ter as seguintes dependências instaladas no projeto:

```bash
axios": "^1.7.9",
cors": "^2.8.5",
dotenv": "^16.4.7",
express": "^4.21.2"
```

Você pode instalar com o seguinte comando:

```bash
npm install axios cors dotenv express
```

### 2. Execute o projeto

Para iniciar o sistema, execute o seguinte comando:

```bash
node ./services/api/index.js
```

---

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Axios**
- **Server-Sent Events (SSE)**
