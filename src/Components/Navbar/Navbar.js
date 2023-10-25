import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Logo from '../../Assets/videos/port-logo.gif';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
      <Navbar className="" sticky="top" bg="dark" data-bs-theme="dark" expand="lg" >
        <div className='ps-5'>
        <Navbar.Brand  href='/' classsName='nav-logo'>
          <img 
          src={Logo}
          width="80"
          height="80"
          alt='brnd-logo'
          />
        </Navbar.Brand>
        </div>
          <Navbar.Toggle className='mx-3' aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse>
        <Container className='bg-dark'>
          <Nav className="nav-links py-2 text-center">
            <Nav.Link href="/" activeStyle>Home</Nav.Link>
            <Nav.Link href="/portfolio">Projects
            </Nav.Link>            
            <Nav.Link href="/#about">About me</Nav.Link>
            <Nav.Link href="/#services">Services</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
            <Nav.Link href="/#reviews">Reviews</Nav.Link>
          </Nav>
      </Container>
        <div className='text-center px-3'>
            <Button href='/ResumePdf' variant='outline-secondary' className=''>Resume</Button>
        </div>
          </Navbar.Collapse>       
        </Navbar>
    )
}

export default Header;