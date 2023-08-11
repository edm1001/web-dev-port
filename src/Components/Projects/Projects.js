import { Row, Col, Card, Button } from "react-bootstrap";
import Wordle from '../../Assets/port/wordle.gif';
import travelBlog from '../../Assets/port/travel-blog.gif';
import Chatterize from '../../Assets/port/chatterize.gif';

const Projects = () => {
    return (
        <section className="portfolio">
            <h3> My Projects</h3>
            <Row>
                <Col lg={4} md={6} sm={12}>
            <Card>
            <Card.Header>
                <h3>Wordle</h3>
            </Card.Header>
            <Card.Img
            src={Wordle} alt='jo' />
            <Card.Body>
                <Button>Hello</Button>
            </Card.Body>
            </Card> 
                </Col>
                <Col lg={4} md={6} sm={12}>
            <Card>
            <Card.Header>
                <h3>Chatterize</h3>
            </Card.Header>
            <Card.Img
            src={Chatterize} alt='jo' />
            <Card.Body>
                <Button>Hello</Button>
            </Card.Body>
            </Card> 
                </Col>
                <Col lg={4} md={6} sm={12}>
            <Card>
            <Card.Header>
                <h3>Travel Diary</h3>
            </Card.Header>
            <Card.Img
            src={travelBlog} alt='jo' />
            <Card.Body>
                <Button>Hello</Button>
            </Card.Body>
            </Card> 
                </Col>
            </Row>

        </section>
    )

}
export default Projects;