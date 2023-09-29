<h1 align="center">Boilerplate Node + Express</h1>

# :memo: Sobre o Projeto

This application is a boilerplate for complex and large systems, especially those that need to scale with security and code quality.

---

# :pushpin: Indice

- [Tecnologias Utilizadas](#globe_with_meridians-tecnologias-utilizadas)
- [Pre Requisitos](#white_check_mark-pre-requisitos)
- [Como Utilizar](#question-como-utilizar)
- [Configuracao](#wrench-configuracao)
- [Execucao](#zap-execucao)

<br />

---

# :globe_with_meridians: Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Vitest
- Supertest
- Lints: Husky, ESlint, Stylelint, Commitlint, Lint-Staged e Prettier
- Swagger and Swagger UI Express
- Pino and Pino-http
- Dotenv
- Compression

<br />

---

# :white_check_mark: Pre Requisitos

- node última versão lts.
- yarn.

<br />

---

# :question: Como Utilizar

Clone o projeto e navegue até a pasta:

```bash
git clone https://github.com/everton-dgn/boilerplate_express.git
cd boilerplate_express
```

Instale as dependências:

```bash
yarn
```

<br />

---

# :wrench: Configuracao

Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente:

```
APP_PORT=3000
```

<br />

---

# :zap: Execucao

Disponível em `http://localhost:3000`.

Desenvolvimento:

```bash
yarn dev
```

Produção:

```bash
yarn build
yarn start
```

<br />
