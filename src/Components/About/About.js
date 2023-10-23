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
            <h4 className="fw-bold fs-3"> Why Hire Me?</h4>
        <p className="" id='abt-msg' >
            I am passionate for Web Development because its a career that feeds my creativity and allows me to bring fresh ideas into projects and learn ideas from amazing people. Hire me because I am an aspiring tech wiz with a proven ability to work with people from my past work experience in retail, freelance and in the coding bootcamp. I am confident that I will contribute positively to the company as I am committed to pursue learning the continuing evolution of Web Development. 
        </p>  
             <Row className="about-badge">
                <Col className="text-start ps-3">
                <p id='abt-msg'>
                <Badge bg="warning" >Ethnicity :</Badge> Filipino <br/>
                <Badge bg="warning">Birthday :</Badge> October 1, 1998 <br/>
                <Badge bg='warning'>Age :</Badge> 25 <br/>
                </p>
                </Col>
                <Col className="text-start pe-5" id='abt-msg'>
                <p className="fs-12" id='abt-msg'>
                <Badge bg="warning" >Birthplace : </Badge> Iloilo City, Philippines <br/>
                <Badge bg="warning">School :</Badge> Coding bootcamp at UT Austin<br/>
                <Badge bg='warning'>Loves :</Badge> aquariums,  <br/>
                </p> 
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