# APIs-Pokemons-via-framework-VITE

Criamos um projeto react do zero:

1 - abre o terminal
2 -  cd Desktop -> ir até o desktop
3- rode o comando de criar -> npm create vite@latest aula-hooks -- --template react
4- cd aula-hooks -> entra no projeto
5- roda as dependencias -> npm install
6- abrir o projeto no vs code -> code .
7 - vai até o terminal e roda o projeto -> npm run dev


----->

useEffect 

Hook pra resolver problemas de dados na tela com efeitos colaterais (side-effect)

3 momentos:

1- quando a tela carrega
2- quando uma ou mais variaveis modificam o valor
3- quando um componente é desmontado(some da tela)

Exemplo 01 - quando a minha tela carregar, eu quero consumir uma API e mostrar os dados na tela

Pra consumir API, vamos usar o axios - em vez do fetch
Link da API Pokemons: https://pokeapi.co/api/v2/pokemon
1- npm install axios
2- importar
3- como consumir api

Pra tratar promessa(promise)
1 - Async/await em vez do .then
8

Passo a passo pra usar o hook useEffect 
1 - Importa o hook -> import { useEffect } from 'react'
2- Usa o hook e passa 2 parametros, o primeiro sempre vai ser uma função e o segundo um array -> useEffect(() => {}, []) 


[https://dontpad.com/pretalab-ciclo6]()
