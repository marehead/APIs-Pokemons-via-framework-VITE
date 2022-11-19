import { useEffect, useState } from 'react';
import Axios from 'axios';

export const Lista = () => {
    const [pokemons, setPokemons] = useState([]);
    const [listaOculta, setListaOculta] = useState(false);
    const [statusDaLista, setStatusDaLista] = useState(
        "A lista de Pokemons esta visivel!"
    )

    useEffect(() => {
        console.log("Componente montado");
        async function pegaDados() {
            const resposta = await Axios.get('https://pokeapi.co/api/v2/pokemon')
            setPokemons(resposta.data.results)
        }
        pegaDados();

        return () => {
            console.log("Componente desmontado");
        };
    }, []);

    useEffect(() => {
        if (listaOculta) {
            setStatusDaLista("A lista de pokemons está Oculta");
        } else {
            setStatusDaLista("A lista de pokemons está Visível!");
        }

        listaOculta
        ? setStatusDaLista("A lista de pokemons está Oculta")
        : setStatusDaLista("A lista de pokemons está Visível");
        }, [listaOculta]);

        function ocultarLista() {
            setListaOculta((valor) => !valor);
        }

        return (
            <>
                <h1>Pokemons</h1>
                <input type="checkbox" onChange={ocultarLista} />
                <label>Ocultar Lista</label>
                <br />
                <h2>{statusDaLista}</h2>
                <br />
                {listaOculta
                    ? null
                    : pokemons.map((pokemon) => {
                        return <p key={pokemon.name}>{pokemon.name}</p>;
                    })}
            </>
        );
    };

    export default Lista;