import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import FeaturedProjects from "../Components/Projects/FeaturedProjects";
import ListProjects from '../Components/Projects/ListProjects';
import Contact from '../Components/Contact/Contact'
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Portfolio = () => {
 
    return (
        <section className="portfolio">
        <Container className="portfolio mb-5">
        <h1 className='mt-3 text-warning align-center text-center fw-bold'>Projects Page</h1>
        <Row as='div'className="mt-5 "> 
            <Col lg={6} md={6} sm={12} xs={12}>
                <motion.h4 
                  initial={{opacity:0.2}}
                  whileInView={{opacity:1}}
                  className='text-secondary fs-3 text-center pt-3'
                  >Link to my Github:</motion.h4>
            </Col>
            <Col  className='text-center' lg={6} md={6} sm={12} xs={12}>
             <motion.div
                whileHover={{
                    scale:1.3, 
                    x:75
                }}
                >
                <a
                className='text-success cursor-pointer' 
                href='https://github.com/edm1001?tab=repositories'
                target="_blank" 
                rel="noopener noreferrer"                
                >
                <AiFillGithub 
                size={70}/>
                </a>
            </motion.div>
            </Col>
        </Row >
        <Row><FeaturedProjects/></Row>
        <Row><ListProjects/></Row>
        </Container>
        <Contact/>

        
        </section>
    )
}

export default Portfolio;