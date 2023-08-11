import {Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="justify-content-center" sticky="top" bg="dark" data-bs-theme="dark" expand="lg" >
        <Navbar.Brand>Icon</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="" >
          <Nav className="justify-content-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>            
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
          </Navbar.Collapse>       
        </Navbar>
    )
}

export default Header;