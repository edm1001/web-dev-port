import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import AboutPic from '../../Assets/photos/personcoding.png'
import { motion } from "framer-motion";

const About = () => {
    return (
    
    <section className="about" id="about">
      <Container>
        <Row className="abt-info">
            <Col lg={6} md={5} sm={12} xs={12} >
            <motion.div
            initial={{x:-200 ,opacity:0}}
            whileInView={{x:0, opacity:1, animationDelay:2}}
            >
            <div className='about-img px-4'>
            <img  alt='about-pic' src={AboutPic} className='w-80'/>
            </div>
            </motion.div>
            </Col>


        <Col className="pb-5 " lg={6} md={7} sm={12} xs={12}>
            <motion.div
                initial={{x:200 ,opacity:0}}
                whileInView={{x:0, opacity:1, }}
                transition={{
                    delay:0.5,
                }}>
            <h4 
             className="fw-semibold text-dark fs-3 text-center"
            >
            About Me
            </h4>
            <div className=" p-2 about-msg">
            <p className="p-1" id='abt-msg' >
            I am enthusiastic about Web Development, this field combines creativity with service that I am passionate towards. With my background in retail, freelance work, and coding bootcamp, I've honed my ability to collaborate effectively and commited to ongoing learning. I will ensure to positively contribute to your company's success.
            </p>  
        </div>
        <Row className="about-badge my-3 text-black">
                <Col className="text-start ps-4">
                <p id='abt-msg'>
                <Badge bg="success" >Ethnicity :</Badge> Filipino <br/>
                <Badge bg="success">Birthday :</Badge> October 1, 1998 <br/>
                <Badge bg='success'>Age :</Badge> 25 <br/>
                </p>
                </Col>
                <Col className="text-start pe-5" id='abt-msg'>
                <p className="text-start" id='abt-msg'>
                <Badge bg="success" >Birthplace : </Badge> Iloilo City, Philippines <br/>
                <Badge bg="success">School :</Badge> Coding bootcamp at UT Austin<br/>
                <Badge bg='success'>Loves :</Badge> Tech, Nature, & Music<br/>
                </p> 
                </Col>
            </Row>
            </motion.div>
            </Col>

            
        </Row>
    
            </Container>            
        </section>

    )
}
export default About;