# 🚀 wishlist-api 🚀: Luiza Code - 4 edição

![GitHub repo size](https://img.shields.io/github/repo-size/RafaelPrado409/Happy?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/RafaelPrado409/Happy?style=for-the-badge)
<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-316192?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>

## 🧐 O que é?

Um módulo lista de desejo dos produtos do e-commerce para seus clientes, que tenhas as seguintes funcionalidades:
- Gerenciamento de clientes
- Gerenciamento de produtos
- Gerenciamento da lista de desejos

## 👍 Pré-requisitos
- Node JS: 16.14.2
- NPM: 8.5.0
- MongoDB: 4.6.0
- Express: 4.18.1
- Mongoose: 6.3.4

## ✍️ Instalação e configuração

Para a instalação, siga estas etapas:

1) Faça um clone do repositório:
```
git clone https://github.com/jessellemcipriano/wishlist-api.git
```

2) Na pasta do projeto, abra o terminal e execute o comando abaixo para instalar as dependências:
```
npm install
```

3) Execute o comando abaixo para iniciar o servidor da aplicação:
```
npm run dev
```

## Rotas do projeto

### Cliente
Cadastrar um cliente (POST)
```
localhost:3009/client/
```
```
{
  "name": "Gamer Warrior",
  "email": {% prompt 'email', 'email', '', '', false, true %},
  "password": "b120",
  "phone": "27997632573",
  "address": {
  "city": "Linhares",
      "state": "ES",
      "zip": "29904340",
      "country": "BR"
  }
}
```
Atualizar dados de um cliente (PUT)
```
localhost:3009/client/:id
```
```
{
  "password":"********"
}
```
Deletar um cliente (DELETE)
```
localhost:3009/client/:id
```
Retornar um cliente (GET)
```
localhost:3009/client/:idOrEmail
```
Retornar todos os clientes (GET)
```
localhost:3009/client/
```

### Login

Login (POST)
```
localhost:3009/login/
```
```
{
  "email":"warrior9@gmail.com",
  "password":"b120"
}
```
Atualizar informações de login (PUT)
```
localhost:3009/login/:id
```
```
{
  "email":"warrior9@gmail.com",
  "password":"b120"
}
```
### Produtos

Criar produto (POST)
```
localhost:3009/products/
```
```
{
  "title": "NOVO Produto",
  "description": "Apenas um teste",
  "brand": "New",
  "price": 999
}
```
Atualizar produto (PUT)
```
localhost:3009/products/:id
```
```
{
  "title": "AAA0asd101",
  "description": "asdhasud",
  "brand": "New",
  "price": 999
}
```
Deletar produto (DELETE)
```
localhost:3009/products/:id
```
Retornar um produto (GET)
```
localhost:3009/products/:id
```
Retornar todos os produtos (GET)
```
localhost:3009/products/
```

### Wishlist

Criar Wishlist (POST)
```
localhost:3009/wishList/
```
```
{
  "title": "Lista",
  "client": "628d0ffdaa64d50f1ddf5370",
  "products": ["62924f5d13bc5ee2ff05acf9"],
  "description": "Lista de produtos para montar um setup gamer"
}
```
Adicionar produtos na Wishlist (PUT)
```
localhost:3009/wishList/addProducts/:id
```
```
{
 "products":["629388fd3fe9fdbb5a7f82a3"]
}
```
Deletar produtos da Wishlist (PUT)
```
localhost:3009/wishList/deleteProducts/:id
```
```
{
 "products":["629388fd3fe9fdbb5a7f82a3"]
}
```
Deleter uma Wishlist (DELETE)
```
localhost:3009/wishList/:id
```
Retornar Wishlist (GET)
```
localhost:3009/wishList/:id
```
Retornar todas as Wishlists (GET)
```
localhost:3009/wishList/
```
Retornar a Wishlists de um cliente (GET)
```
localhost:3009/wishList/client/:client
```



## 👀 Variáveis de ambiente 
#### Development
#### PORT=
#### CONNECTION_STRING=
#### JWT_SECRET=


## 🔥 Grupo Warriors 
- Jéssellem Cipriano
- Gabriela Nogueira
- Liliane
- Nathália
- Thais Coffani
