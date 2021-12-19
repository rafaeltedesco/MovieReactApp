import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

export const Detalhe = ()=> {

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(()=> {

    async function fetchMovie() {
      setLoading(true)
      const response = await fetch(
        `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
      )
      const data = await response.json()

      if (data) {
        setMovie(data)
        setLoading(false)
        return
      }
      setLoading(false)
    }

    fetchMovie()

  }, [id])

  function addToFavorites() {

    const storage = localStorage.getItem('favoritos')
    const movies = JSON.parse(storage) || []

    let hasMovie = movies.some(movie=> movie.id === Number(id))
    if (!hasMovie) {
      movies.push(movie)
      
      localStorage.setItem('favoritos', JSON.stringify(movies))
      toast.success('Filme favoritado com sucesso!')
    }
    else {
      toast.info('Filme já está na lista de favoritos!')
    }
  }

  if (loading) {
    return (
      <h2>
        Carregando filmes...
      </h2>
    )
  }
  else {
    
      return(
        <Container>
          <h2>
            {movie.nome}
          </h2>
          <img src={movie.foto} alt="" />
          <p>
            {movie.sinopse}
          </p>
          <div className="movieButtons">
            <a target="#" className="movieButton red" onClick={addToFavorites}>
              Favoritar
            </a>

            <a className="movieButton" target="blank" href={`http://youtube.com/results?search_query=${movie.nome} trailer`}>
                    Ver Trailer
            </a>

          </div>
        </Container>
    
      )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 1px 2px 30px #777;
  max-width: 900px;
  margin-top: 2rem;
  border-radius: 10px;
`