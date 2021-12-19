import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'

export const Favoritos = ()=> {
  const navigate = useNavigate()
  const [favoritos, setFavoritos] = useState([])

  useEffect(()=> {
   

    const filmesStorage = localStorage.getItem('favoritos')
    const filmes = JSON.parse(filmesStorage) || []
    setFavoritos(filmes)

  }, [favoritos])

  function removeFavorite(id) {
    const newFavoritos = favoritos.filter(favorito=>  favorito.id !== id
    )
    localStorage.setItem('favoritos', JSON.stringify(newFavoritos))
    toast.info(`Filme com id ${id} removido com sucesso da lista de favoritos`)
    setFavoritos(newFavoritos)

  }

  if (!favoritos.length) {
    return (
      <div>
        <h2 style={{ fontWeight: 100, marginBottom: '2rem'}}>Nenhum filme favorito adicionado aqui! 😭</h2>
        <a className="movieButton red" onClick={()=> navigate('/')}>Voltar</a>
      </div>
    )
  }
  else {
    return (
      <div>
        <h2 style={{fontSize: '40px', textAlign: 'center'}}>
          Favoritos
        </h2>
        <div style={{ marginTop: '2rem'}}>
          {favoritos.map(favorito=> {
            return (
              <Container>
              <h2>{favorito.nome}</h2>
              <a href={`/filme/${favorito.id}`} className="movieButton red" style={{ marginRight: '10px'}}>Ver mais</a>
              <a href="#" className="movieButton red" onClick={()=>removeFavorite(favorito.id)}>Excluir</a>
              </Container>
            )
          })}
        </div>
      </div>
    )
  }



}


const Container = styled.div`
background-color: #fff;
padding: 1rem;
border-radius: 10px;
box-shadow: 1px 1px 30px gray;
margin-top: 2rem;`