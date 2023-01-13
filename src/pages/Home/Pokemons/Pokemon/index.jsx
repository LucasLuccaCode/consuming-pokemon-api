import { useEffect, useState } from "react"
import { api } from "../../../../services"

export default function Pokemon({ item }) {
  const [details, setDetails] = useState({})

  useEffect(() => {
    const getPokemonData = async () => {
      const { data } = await api.get(item.url)
      setDetails(data)
    }
    getPokemonData()
  }, [])

  return (
    <li className="c-pokemons__pokemons">
      <img src={details.sprites?.front_default} alt={`Foto do ${details?.name}`} />
      <h2>{details.name}</h2>
      <p>{details.base_experience}</p>
    </li>
  )
}