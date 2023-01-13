import { useEffect, useState } from "react"
import { api } from "../../../services"

import Pokemon from "./Pokemon"

export default function Pokemons(){
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemons = async () => {
      const { data } = await api.get('https://pokeapi.co/api/v2/pokemon')
      setPokemons(data.results)
    }

    getPokemons()
  }, [])

  return (
    <div className="c-pokemons">
      <ul>
        {
          pokemons.map(item => (
            <Pokemon key={item.name} item={item} />
          ))
        }
      </ul>
    </div>
  )
}