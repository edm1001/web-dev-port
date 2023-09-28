import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Logo from '../../Assets/videos/port-logo.gif'

const Header = () => {
    return (
      <Navbar className="" sticky="top" bg="dark" data-bs-theme="dark" expand="lg" >
        <Container>
        <div className='ps-3'>
        <Navbar.Brand  href='/' classsName='nav-logo'>
          <img 
          src={Logo}
          width="80"
          height="80"
          />
        </Navbar.Brand>
        </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="" >
          <Nav className="nav-links pt-3 text-center">
            <Nav.Link href="/" activeStyle>Home</Nav.Link>
            <Nav.Link href="/#about">About me</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>            
            <Nav.Link href="/#services">Services</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
            <Nav.Link href="/#reviews">Reviews</Nav.Link>
          </Nav>
        <div className='text-center py-2'>
            <Button href='/ResumePdf' variant='outline-danger' className=''>Resume</Button>
        </div>
          </Navbar.Collapse>       
      </Container>
        </Navbar>
    )
}

export default Header;