# Projeto Pokémon API

Este projeto tem como objetivo consumir a API PokeApi e listar todos os Pokémons disponíveis na consulta do seguinte endpoint: https://pokeapi.co/api/v2/pokemon.

## Como utilizar

Clone este repositório e instale as dependências necessárias executando o comando:

```
yarn install ou npm install
```

Em seguida, execute o comando para iniciar o projeto:
 
```
yarn start ou npm start
```

## Informações exibidas

- Imagem
- Nome
- Experiência base

## Como funciona

O projeto consome a API PokéAPI e lista todos os Pokémons disponíveis na consulta do endpoint https://pokeapi.co/api/v2/pokemon. Para acessar as informações individuais de cada Pokémon, é utilizado o endpoint https://pokeapi.co/api/v2/pokemon/:id, onde :id é o número do Pokémon desejado.

## Informações exibidas:

- Imagem: obtida através do atributo `sprites.front_default`
- Nome: obtido diretamente do objeto retornado pela API
- Experiência base: obtida através do atributo `base_experience`

## Extras
  - Ordenado por nome.

## Tecnologias utilizadas
- React
- Axios
- React Router

![Preview demo](https://github.com/LucasLuccaCode/consuming-pokemon-api/blob/main/public/demo.png)