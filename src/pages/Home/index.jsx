/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 

https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:

- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:

https://pokeapi.co/api/v2/pokemon/:id

DICA:

imagem => sprites.front_default
experiência => base_experience
EXTRA: se puder ordene por nome.
*/

import Pokemons from "./Pokemons";

export default function Home() {
  return (
    <div className="c-home">
      <h1>Lista de pokemons</h1>

      <Pokemons />
    </div>
  )
}