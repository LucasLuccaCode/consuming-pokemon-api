# Consumindo PokéAPI

Este projeto tem como objetivo usar recursos modernos do react para consultar / exibir a API PokéAPI a partir do seguinte endpoint: https://pokeapi.co/api/v2/pokemon.

## Como utilizar

Clone este repositório:

```
git clone https://github.com/LucasLuccaCode/consuming-pokemon-api.git
```

Navegue para a pasta do projeto:

```
cd consuming-pokemon-api
```

Instale as dependências:

```
yarn install 

ou

npm install
```

Em seguida, execute o comando para iniciar o projeto:
 
```
yarn start

ou

npm start
```

## Informações exibidas:

- Imagem: obtida através do atributo `sprites.front_default`
- Nome: obtido diretamente do objeto retornado pela API através do atributo `name`
- Experiência: obtida através do atributo `base_experience`

## Extras

  - Ordenado por nome.
  - Para acessar as informações individuais de cada Pokémon, é utilizado o endpoint `https://pokeapi.co/api/v2/pokemon/:id`, onde :id é o número do Pokémon desejado.

## Tecnologias utilizadas

- React
- React Router
- React Query
- Axios
- Styled Components

![Preview demo](https://github.com/LucasLuccaCode/consuming-pokemon-api/blob/main/public/demo.png)