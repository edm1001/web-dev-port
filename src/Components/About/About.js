import { Row, Col } from "react-bootstrap";
import AboutPic from '../../Assets/photos/personcoding.png'

const About = () => {
    return (

        <section className="about" id="about">
            
    <Row className="abt-info">
        <Col lg={6} md={8} sm={12}>
        <div className="intro-msg">
        <h1> Welcome to my Webpage</h1>
       <p>
        My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
       </p>
        </div>
        </Col>
        <Col lg={6} md={4} sm={12}>
        <div className='intro-img'>
        <img  alt='about-pic' src={AboutPic}/>
        </div>
        </Col>
    </Row>
        {/* <div  className="abt-banner">
        <div>50+ Projects</div>
        <div> 2yrs+ Experiences</div>
        </div> */}
    </section>

    )
}
export default About;