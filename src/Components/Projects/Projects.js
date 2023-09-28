import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Wordle from '../../Assets/port/wordle.gif';
import PortGenerator from '../../Assets/port/portfolio=generator.gif';
import Chatterize from '../../Assets/port/chatterize.gif';
import Container from 'react-bootstrap/Container';

const Projects = () => {
    return (
        <Container className="project" fluid>
            <h2 className='text-center pt-5'> My Projects</h2>
            <Row className="d-flex justify-content-center p-5 project-row">

            <Col className='' lg={4} md={4} sm={6}>
            <Card className="proj-card h-90 w-85" to='/portfolio'>
            <Card.Img
            src={Wordle} alt='jo'/>
            </Card> 
                </Col>

            <Col lg={4} md={4} sm={6}>
            <Card className="proj-card h-90 w-85">
            <Card.Img
            src={Chatterize} alt='jo' />
            </Card> 
            </Col>

            <Col lg={4} md={4} sm={6}>
            <Card className="proj-card h-90 w-85">
            <Card.Img
            src={PortGenerator} alt='jo' />
            </Card> 
            </Col>
            </Row >

            <div className='pb-5 text-center'>
            <Button  variant="outline-dark" size="lg" className='see-btn' href='/portfolio'> See More! </Button>
            </div>

        </Container>
    )

}
export default Projects;