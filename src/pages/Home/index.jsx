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

import { useEffect, useState } from "react"
import { api } from "../../services"

export default function Home() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemons = async () => {
      const { data } = await api.get()
      setPokemons(data.results)
    }
    getPokemons()
  }, [])

  return (
    <div className="c-home">
      <h1>Lista de pokemons</h1>

      <div className="c-pokemons">
        <ul>
          {
            pokemons.map(pokemon => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}