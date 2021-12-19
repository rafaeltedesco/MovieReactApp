import { MoviesList } from '../../layout/fragments/MoviesList'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export const Home = ()=> {
  return (
    <Container>
    
      <MoviesList />

    </Container>
  )
}