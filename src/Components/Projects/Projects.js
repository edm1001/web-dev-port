import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Wordle from '../../Assets/port/wordle.gif';
import travelBlog from '../../Assets/port/travel-blog.gif';
import Chatterize from '../../Assets/port/chatterize.gif';
import Container from 'react-bootstrap/Container';

const Projects = () => {
    return (
        <Container className="project" fluid>
            <h2 className='text-center'> My Projects</h2>
            <Row className="d-flex justify-content-center p-5 project-row">

            <Col className='' lg={4} md={6} sm={6}>
            <Card className="proj-card h-80 w-75" to='/portfolio'>
            <Card.Img
            src={Wordle} alt='jo'/>
            </Card> 
                </Col>

            <Col lg={4} md={6} sm={6}>
            <Card className="proj-card h-80 w-75">
            <Card.Img
            src={Chatterize} alt='jo' />
            </Card> 
            </Col>

            <Col lg={4} md={6} sm={6}>
            <Card className="proj-card w-90">
            <Card.Img
            src={travelBlog} alt='jo' />
            </Card> 
            </Col>
            </Row >

            <Row className='py-4'>
            <Button  variant="outline-warning" size="lg" className='w-100 d-flex justify-content-center' href='/portfolio'> See More! </Button>
            </Row>

        </Container>
    )

}
export default Projects;