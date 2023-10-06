import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Wordle from '../../Assets/port/wordle.gif';
import PortGenerator from '../../Assets/port/portfolio=generator.gif';
import Chatterize from '../../Assets/port/chatterize.gif';
import Container from 'react-bootstrap/Container';

const Projects = () => {
    return (
        <section>

        <h2 className=' text-center fw-bold fs-1 pt-5'> My Projects</h2>
        <Container className="project">
            
            <Row className="project-row">
            <Col className='p-2' lg={4} md={4} sm={4} xs={4}>
            <Image className="proj-img"  src={Wordle} to='/portfolio'>
            </Image> 
                </Col>
            <Col className='p-2' lg={4} md={4} sm={4} xs={4} >
            <Image className="proj-img" src={Chatterize} to='/portfolio'>
            </Image> 
                </Col>
            <Col className='p-2' lg={4} md={4} sm={4} xs={4}>
            <Image className="proj-img" src={PortGenerator} to='/portfolio'>
            </Image> 
                </Col>

            </Row >

            <div className='pb-5 text-center'>
            <Button  variant="outline-dark" size="lg" className='see-btn' href='/portfolio'> See More! </Button>
            </div>
        </Container>
            </section>
    )

}
export default Projects;