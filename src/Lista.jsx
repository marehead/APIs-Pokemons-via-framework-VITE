import { useEffect, useState } from 'react'
import Axios from 'axios'

export const Lista = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function pegaDados() {
            const resposta = await Axios.get('https://pokeapi.co/api/v2/pokemon')
            setPokemons(resposta.data.results)
        }
        pegaDados()
    }, [])
    return (
        <>
            {pokemons.map(pokemon => {
                return (
                    <p key={pokemon.name}>{pokemon.name}</p>
                )
            })}
        </>
    )
}

export default Lista;