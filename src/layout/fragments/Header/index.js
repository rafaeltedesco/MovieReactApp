import { Link } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import '../../../App.css'



const MenuItem = ({item})=> {
  return (
    <li key={item.page}>
      <Link style={{ fontSize: '22px', padding: '20px'}} to={item.path}>
        {item.page}
      </Link>
    </li>
  )
}

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 150px;
`

const Nav = ({items})=>{
  return (
    <List>
      {items.map(item=> <MenuItem item={item} key={item} />)}
    </List>
    
  )
   
 }

const Head = styled.header`
  background-color: tomato;
  display: flex;
  justify-content: space-around;
  font-family: Arial;
  align-items: center;
  color: #fff;
  padding: 10px;

`

const slide = keyframes`
from {
  transform: translateX(-200%);
}
to {
  transform: translateX(0);
}

`
const Title = styled.h1`
  font-size: 40px;
  animation: ${slide} 1s;
`

export const Header = ()=> {
  const pages = [
    {page: "Home", path: "/"},
    {page: "Sobre", path: "/sobre"},
    {page: "Contato", path: "/contato"},
    {page: "Favoritos", path: "/favoritos"}
    ]
  return (
    <Head>
      <Title><Link to="/">Movie API</Link></Title>
      <Nav items={pages}/>
    </Head>
  )
}
