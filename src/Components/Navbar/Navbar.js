import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
      <Navbar className="" sticky="top" bg="dark" data-bs-theme="dark" expand="lg" >
        <Navbar.Brand classsName='p nav-logo'>Icon</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="" >
        <Container>
          <Nav className="nav-links">
            <Nav.Link href="/" activeStyle>Home</Nav.Link>
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>            
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
          </Nav>
      </Container>
            <Button href='/ResumePdf' className='nav-resume'>Resume</Button>
          </Navbar.Collapse>       
        </Navbar>
    )
}

export default Header;