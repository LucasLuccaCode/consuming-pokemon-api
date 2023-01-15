import { useEffect, useState, useCallback } from "react"
import { api } from "../../../../services"
import { Image, Info, PokemonContainer } from "./StyledComponents"

export default function Pokemon({ item }) {
  const [details, setDetails] = useState({})

  useEffect(() => {
    getPokemonData()
  }, []);

  const getPokemonData = useCallback(async () => {
    const { data } = await api.get(item.url)
    setDetails(data)
  }, [item.url]);

  return (
    <PokemonContainer>
      <Image loading="lazy" src={details.sprites?.front_default} alt={`Foto do ${details?.name}`} />
      <Info>
        <h2 className="nowrap">{details.name}</h2>
        <p>{details.base_experience} <strong>EXP</strong></p>
      </Info>
    </PokemonContainer>
  )
}
