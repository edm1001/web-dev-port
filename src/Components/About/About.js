import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import AboutPic from '../../Assets/photos/personal/abt-photo.png'

const About = () => {
    return (
    
    <section className="about" id="about">
      <Container>
        <Row className="abt-info">

            <Col lg={6} md={4} sm={12}>
            <div className='about-img h-100 w-100 my-4 p-4'>
            <img  alt='about-pic' src={AboutPic} className='h-100 w-100'/>
            </div>
            </Col>


            <Col className="my-5 py-2 " lg={6} md={8} sm={12}>
            <div className=" p-2 about-msg">
            <h4 className="fw-bold"> Why Hire Me?</h4>
        <p className="fs-6">
            My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
        </p>  
             <Row className="about-badge">
                <Col className="text-start ps-3 fs-small">
                <Badge bg="success" >Ethnicity :</Badge> Filipino <br/>
                <Badge>Birthday :</Badge> October 1, 1998 <br/>
                <Badge bg='danger'>Age :</Badge> 25 <br/>
                </Col>
                <Col className="text-start pe-5">
                <Badge bg="success" >Birthplace : </Badge> Iloilo City, Philippines <br/>
                <Badge>School :</Badge> Coding bootcamp at UT Austin<br/>
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