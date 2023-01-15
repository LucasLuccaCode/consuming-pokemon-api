import { useEffect, useState, useCallback } from "react"
import Loading from "../../../components/Loading"
import { api } from "../../../services"

import Pokemon from "./Pokemon"
import { PokemonsContainer, Buttons, Button } from "./StyledComponents"

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([])
  const [prevPokemons, setPrevPokemons] = useState(null)
  const [nextPokemons, setNextPokemons] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = useCallback(async (url = 'https://pokeapi.co/api/v2/pokemon') => {
    try {
      setLoading(true);

      const { data } = await api.get(url)

      setPokemons(data.results)
      setNextPokemons(data.next)
      setPrevPokemons(data.previous)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }, [])

  function renderButton(url, text) {
    return url && <Button className="btn" onClick={() => getPokemons(url)}>{text}</Button>
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <PokemonsContainer>
        {pokemons.map(item => <Pokemon key={item.name} item={item} />)}
      </PokemonsContainer>

      <Buttons>
        {prevPokemons && renderButton(prevPokemons, "Anteriores")}
        {nextPokemons && renderButton(nextPokemons, "Próximos")}
      </Buttons>
    </>
  )
}
