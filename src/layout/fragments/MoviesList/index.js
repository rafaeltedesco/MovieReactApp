
import {useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import { Link } from 'react-router-dom'

const slideShow = keyframes`
from {
  transform: translateX(-200%)
}
to {
  transform: translateX(0);
}
`

const Movie = styled.article`
  animation: ${slideShow} 1s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color:#fff;
  border-radius: 10px;
  padding: 10px 0;
  margin: 20px 0 ;
  box-shadow: 1px 2px 30px #000;
  max-width: 700px;
  h2 {
    font-size: 40px;
    margin-bottom: 1rem;

  }
  img {
    max-width: 100%;
  }
  p {
    margin-top: 10px;
    width: 80%;
    text-align: center;
    font-size: 22px;
  }
`

const Button = styled.button`
background-color: transparent;
  border: 3px solid tomato;
  color: tomato;
  border: none;
  background-color: tomato;
  color: #fff;

  font-size: 22px;
  margin:0.2rem 0;
  width: 100%;
  cursor: pointer;

  a {
    display: flex;
    font-size: 22px;
    width: 100%;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  cursor: pointer;
  
  }
`

const Div = styled.div`
  ${Button}:hover {
    background-color: transparent;
    border-top: 3px solid tomato;
    border-bottom: 3px solid tomato;
    color: tomato;
  }
  
  ${Button}:hover a {
    color: tomato;
  }
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

`



export const MoviesList = ()=> {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    async function loadMovies() {
      setLoading(true)
      const response = await fetch('https://sujeitoprogramador.com/r-api/?api=filmes')
      const data = await response.json()
     
      if (!!data?.length) {
        setMovies(data)
        setLoading(false)
        return
      }
      setLoading(false)
    }
    
    loadMovies()
  }, [])
  
  if (!loading) {
    return (
      movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <h2>{movie.nome}</h2>
            <img src={movie.foto} alt="" />
            <p>
            {movie.sinopse.slice(0, Math.floor(movie.sinopse.length/3))}...
            </p>
              <Div>
                <Button>
                  <Link to={`/filme/${movie.id}`}>
                    Ver Mais
                  </Link>
                </Button>
                <Button>
                  <a target="blank" href={`http://youtube.com/results?search_query=${movie.nome} trailer`}>
                    Ver Trailer
                  </a>
                </Button>
              </Div>  
          </Movie>
        )
      })
    )
  } 
  else {
    return (
      <h3>Carregando filmes...</h3>
    )
  }




}