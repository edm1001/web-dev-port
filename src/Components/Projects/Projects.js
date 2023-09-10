import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Wordle from '../../Assets/port/wordle.gif';
import travelBlog from '../../Assets/port/travel-blog.gif';
import Chatterize from '../../Assets/port/chatterize.gif';

const Projects = () => {
    return (
        <section className="portfolio" id='portfolio'>
            <h2> My Projects</h2>
            <Row className="d-flex justify-content-center project-row">
                <Col lg={3} md={4} sm={6}>
            <Card className="proj-card" to='/portfolio'>
            <Card.Img
            src={Wordle} alt='jo'/>
            <Card.Body>
                <button href='/portfolio' to='/portfolio'>Link</button>
            </Card.Body>
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
            </Row>


        </section>
    )

}
export default Projects;