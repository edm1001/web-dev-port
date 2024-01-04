import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Wordle from '../../Assets/port/wordle.gif';
import PortGenerator from '../../Assets/port/portfolio=generator.gif';
import Chatterize from '../../Assets/port/chatterize.gif';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';

const Projects = () => {
    const rotateVariant={
        resting: {
          rotate: 0,
        },
        hovering: {
          rotate: 225, 
          transition: {
            duration: 2,
          },
        },
      };
      
    return (
        <section>

        <h2 className=' text-center fw-bold fs-1 pt-5'> My Projects</h2>
        <Container className="project">
            <Row className="project-row">
            <Col className='p-2' lg={4} md={4} sm={4} xs={4}>
            <motion.div
                variants={rotateVariant}
                initial="resting"
                whileHover="hovering"
                >

            <Image className="proj-img"  src={Wordle} to='/portfolio'>
            </Image> 
            </motion.div>
                </Col>
            <Col className='p-2' lg={4} md={4} sm={4} xs={4} >
            <motion.div
                variants={rotateVariant}
                initial="resting"
                whileHover="hovering"
                >
            <Image className="proj-img" src={Chatterize} to='/portfolio'>
            </Image> 
                </motion.div>
                </Col>
            <Col className='p-2' lg={4} md={4} sm={4} xs={4}>
            <motion.div
                variants={rotateVariant}
                initial="resting"
                whileHover="hovering"
                >
            <Image className="proj-img" src={PortGenerator} to='/portfolio'>
            </Image> 
                </motion.div>
                </Col>

            </Row >

            <motion.div 
            whileHover={{scale:1.5}}
            className='pb-5 text-center'>
            <Button  variant="outline-dark" size="lg" className='see-btn' href='/portfolio'> See More! </Button>
            </motion.div>
        </Container>
            </section>
    )

}
export default Projects;