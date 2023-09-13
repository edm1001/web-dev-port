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
            <Row className="d-flex justify-content-center project-row">

            <Col lg={3} md={4} sm={6}>
            <Card className="proj-card" to='/portfolio'>
            <Card.Img
            src={Wordle} alt='jo'/>
            </Card> 
                </Col>

            <Col lg={3} md={4} sm={6}>
            <Card className="proj-card">
            <Card.Img
            src={Chatterize} alt='jo' />
            </Card> 
            </Col>

            <Col lg={3} md={4} sm={6}>
            <Card className="proj-card">
            <Card.Img
            src={travelBlog} alt='jo' />
            </Card> 
            </Col>

            <Col lg={3} md={4} sm={6}>
            <Card className="proj-card" to='/portfolio'>
            <Card.Img
            src={Wordle} alt='jo'/>
            </Card> 
                </Col>

            <Col lg={3} md={4} sm={6}>
            <Card className="proj-card">
            <Card.Img
            src={Chatterize} alt='jo' />
            </Card> 
            </Col>

            <Col lg={3} md={4} sm={6}>
            <Card className="proj-card">
            <Card.Img
            src={travelBlog} alt='jo' />
            </Card> 
            </Col>

            </Row >
            <Row className='pb-4'>
            <Button  variant="outline-warning" size="lg" className='' href='/portfolio'> See More! </Button>
            </Row>

        </Container>
    )

}
export default Projects;