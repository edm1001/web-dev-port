import { Row, Col, Card, Button } from "react-bootstrap";
import Wordle from '../../Assets/port/wordle.gif'
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
            </Row>

        </section>
    )

}
export default Projects;