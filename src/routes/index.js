import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Sobre } from '../pages/Sobre'
import { Contato } from '../pages/Contato'
import { Header } from '../layout/fragments/Header'
import { Detalhe } from '../pages/Detalhe'
import { Favoritos } from '../pages/Favoritos'

export const MoviesRouter = ()=> {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/filme/:id" element={<Detalhe />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
    
  )
}