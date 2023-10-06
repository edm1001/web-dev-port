import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import AboutPic from '../../Assets/photos/personcoding.png'

const About = () => {
    return (
    
    <section className="about" id="about">
      <Container>
        <Row className="abt-info">

            <Col lg={6} md={4} sm={12}>
            <div className='about-img'>
            <img  alt='about-pic' src={AboutPic}/>
            </div>
            </Col>


            <Col className="mb-5 p-4" lg={6} md={8} sm={12}>
            <div className=" p-2 about-msg">
            <h4 className="fw-bold"> Why Hire Me?</h4>
        <p className="fs-6">
            My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
        </p>  
             <Row className="about-badge">
                <Col className="text-start">
                <Badge bg="success" >Ethnicity :</Badge> Filipino <br/>
                <Badge>Birthday :</Badge> October 1, 1998 <br/>
                <Badge bg='danger'>Age :</Badge> 25 <br/>
                </Col>
                <Col className="text-start">
                <Badge bg="success" >Birthplace : </Badge> Iloilo City, Philippines <br/>
                <Badge>School :</Badge>Coding bootcamp at UT Austin<br/>
                <Badge bg='danger'>Loves :</Badge> excercise, nature, & games <br/>
                </Col>
            </Row>
            </div>
            </Col>

            
        </Row>
    
            </Container>            
        </section>

    )
}
export default About;