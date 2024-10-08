# Encurtador de URL 🌐

Um encurtador de URL simples desenvolvido em Node.js que permite transformar URLs longas em URLs curtas, facilitando o compartilhamento.

## Funcionalidades

- **Encurtar URLs**: Converte uma URL longa em um link curto.
- **Redirecionamento**: Redireciona o usuário para a URL original ao acessar a URL curta.
- **Interface Web**: Interface de usuário amigável para encurtar links.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework web para facilitar o desenvolvimento da API.
- **MongoDB**: Banco de dados NoSQL para armazenar as URLs encurtadas.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB e Node.js.

## Deploy

O projeto está disponível online! Você pode testá-lo através do seguinte link: [https://encurtadorurl.onrender.com/](https://encurtadorurl.onrender.com/)

## Como Executar Localmente

Siga os passos abaixo para configurar o projeto em sua máquina local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- [MongoDB](https://www.mongodb.com/) instalado e em execução.

### Passos

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione suas configurações, por exemplo:
    ```env
    MONGODB_URI=mongodb://localhost:27017/encurtador
    PORT=3000
    ```

4. Inicie o servidor:
    ```bash
    npm start
    ```

5. Acesse a aplicação em seu navegador: [http://localhost:3000](http://localhost:3000)

## Uso

- Para encurtar uma URL, acesse a página inicial e insira a URL desejada.
- O sistema gerará uma URL curta que você pode usar para redirecionar os usuários.
