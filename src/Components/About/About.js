import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import AboutPic from '../../Assets/photos/personcoding.png'

const About = () => {
    return (
    
    <section className="about" id="about">            
        <Row className="abt-info">
            <Col lg={6} md={8} sm={12}>
            <div className="intro-msg">
            <h1> Why Hire Me?</h1>
        <p>
            My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
        </p>  
             <Row className="">
                <Col className="text-start">
                <Badge bg="success" >Ethnicity:</Badge> Filipino <br/>
                <Badge>Birthday:</Badge> October 10, 1998 <br/>
                <Badge bg='danger'>Age:</Badge> 24 <br/>
                </Col>
                <Col className="text-start">
                <Badge bg="success" >Birthplace: </Badge> Iloilo City, Philippines <br/>
                <Badge>School:</Badge>Coding Bootcamp at UT Austin<br/>
                <Badge bg='danger'>Loves:</Badge> traveling, nature, & games <br/>
                </Col>
            </Row>
            </div>
            
            </Col>
            <Col lg={6} md={4} sm={12}>
            <div className='intro-img'>
            <img  alt='about-pic' src={AboutPic}/>
            </div>
            </Col>
        </Row>
    
        </section>

    )
}
export default About;