import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { TiShoppingCart } from "react-icons/ti";
import logo from '../../../public/img/logos/logoCompletaFundoBege.png'
import rokesNavLink from "../../../public/img/rokesNavLink.jpg"
import './Header.css'

function Header() {

  return (
    <Navbar expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home " className='img-logo'><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
          <Nav className='mx-auto'>
            <Nav.Link href="#home" className='navLink d-flex align-items-center'>Catalogo</Nav.Link>
            <Nav.Link href="#link" className='navLink d-flex align-items-center'>Contato</Nav.Link>
            <Nav.Link href="#link" className='navLink d-flex align-items-center' id='navLinkimg'><span>Sobre a </span><img src={rokesNavLink} alt="" /></Nav.Link>
          </Nav>
          <Nav className='mx-auto' id='navLogin'>
            <Nav.Link href="#home" className='navLink d-flex align-items-center'><TiShoppingCart /></Nav.Link>
            <Nav.Link href="#link" className='navLink d-flex align-items-center'></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
        // <Navbar collapseOnSelect  expand='lg'>
        //   <Container>
        //     <Navbar.Brand className='img-logo'>
        //       <img src={logo} alt="" />
        //     </Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse className='d-flex justify-content-center' id="basic-navbar-nav">
        //       <Nav >
        //         <Nav.Link href='#' className='nav-item'>Catalogo</Nav.Link>
        //       </Nav>
        //     </Navbar.Collapse>
        //   </Container>
        // </Navbar>
      
      
    
  )
}

export default Header
