import { Row, Col } from "react-bootstrap";
import AboutPic from '../../Assets/photos/personcoding.png'

const About = () => {
    return (

        <section className="about" >
    <Row>
        <Col lg={6} md={8} sm={12}>
        <div className="intro-msg">
        <h1> Welcome to my Webpage</h1>
       <p>
        My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
       </p>
        about info here
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