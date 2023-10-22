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

            <Col lg={6} md={6} sm={12}>
            <div className='about-img h-100 w-100 my-4 p-4'>
            <img  alt='about-pic' src={AboutPic} className='h-100 w-100'/>
            </div>
            </Col>


            <Col className="my-5 py-2 " lg={6} md={6} sm={12}>
            <div className=" p-2 about-msg">
            <h4 className="fw-bold"> Why Hire Me?</h4>
        <p className="fs-6">
            I am passionate for Web Development, I love it because its a career that feeds my creativity and allows me to bring fresh ideas into projects and learn ideas from amazing people. Hire me because I am a tech geek with a proven ability to work with people because of my past work experience in retail, freelance and in the coding bootcamp. I am confident that I will contribute positively to the company as I am committed to pursue learning the continuing evolution of Web Development. 
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