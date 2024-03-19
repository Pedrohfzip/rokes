import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../public/img/logos/logoCompletaFundoBege.png'
import rokesNavLink from "../../../public/img/rokesNavLink.jpg"
import './Header.css'

function Header() {

  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home " className='img-logo'><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className='mx-auto'>
            <Nav.Link href="#home" className='navLink d-flex align-items-center'>Catalogo</Nav.Link>
            <Nav.Link href="#link" className='navLink d-flex align-items-center'>Contato</Nav.Link>
            <Nav.Link href="#link" className='navLink d-flex align-items-center' id='navLinkimg'><span>Sobre a </span><img src={rokesNavLink} alt="" /></Nav.Link>
          </Nav>
          <Nav className='mx-auto' id='navLogin'>
            <Nav.Link href="#home" className='navLink d-flex align-items-center'><i className="bi bi-basket"></i></Nav.Link>
            <Nav.Link href="#link" className='navLink d-flex align-items-center'><i className="bi bi-person-circle"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
      
    
  )
}

export default Header
