
import './App.css';
import { MoviesRouter } from './routes'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <MoviesRouter />
      <ToastContainer />
    </Container>
    
  );
}

export default App;
