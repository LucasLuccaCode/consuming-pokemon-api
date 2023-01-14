import { useEffect, useState } from "react"
import { api } from "../../../../services"
import { Image, Info, PokemonContainer } from "./StyledComponents"

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
    <PokemonContainer>
      <Image src={details.sprites?.front_default} alt={`Foto do ${details?.name}`} />
      <Info>
        <h2 className="nowrap">{details.name}</h2>
        <p>{details.base_experience} <strong>EXP</strong></p>
      </Info>
    </PokemonContainer>
  )
}