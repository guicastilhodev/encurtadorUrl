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

## Como Executar Localmente

Siga os passos abaixo para configurar o projeto em sua máquina local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) configurado.

### Configuração do MongoDB Atlas

1. Crie uma conta no MongoDB Atlas e configure um cluster.
2. Crie um banco de dados e um usuário com as permissões necessárias.
3. Obtenha a string de conexão para o seu cluster. A string será semelhante a:
    ```env
    mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/encurtador?retryWrites=true&w=majority
    ```
4. **Substitua:**
   - `<usuario>`: seu nome de usuário do MongoDB Atlas.
   - `<senha>`: a senha do seu usuário.
   - `<cluster>`: o nome do seu cluster (por exemplo, `cluster0`).
   
5. Configure a variável de ambiente no arquivo `.env` na raiz do projeto:
    ```env
    MONGODB_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/encurtador?retryWrites=true&w=majority
    PORT=3000
    ```

### Passos para Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    npm start
    ```

4. Acesse a aplicação em seu navegador: [http://localhost:3000](http://localhost:3000)

## Uso

- Para encurtar uma URL, acesse a página inicial e insira a URL desejada.
- O sistema gerará uma URL curta que você pode usar para redirecionar os usuários.


