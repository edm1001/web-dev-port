import {Card , Row, Col} from 'react-bootstrap';
import {FaBootstrap, FaReact} from 'react-icons/fa';
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io';
import {VscJson} from 'react-icons/vsc';
import {DiNpm, DiNodejs, DiStackoverflow, DiResponsive} from 'react-icons/di';
import {AiOutlineHtml5} from 'react-icons/ai'
import {SiMongodb, SiExpress} from 'react-icons/si'

const Services = () => {
    return (
        <section className='services' id='services'>
            <h2 className=''>Services</h2>
            <Row className='srvc-row' bg='dark' data-bs-theme='dark'>
                <Col lg={4} md={4} sm={6} className='srvc-col'>
                    <Card>
                    <Card.Header className='srvc-header'>
                        <h6>MVC</h6></Card.Header>
                <Card.Body>
                    <Card.Title >Model View Controller</Card.Title>
                    <p> A framework pattern for computer softwares that easilhy distinguish related program logic into model, view, and controller elements. 
                </p>
                </Card.Body>
            </Card>
                </Col>
                
                <Col lg={4} md={4} sm={6} className='srvc-col'>
                    <Card>
                    <Card.Header className='srvc-header'> <h6>OOP</h6></Card.Header>
                <Card.Body>
                    <Card.Title>Object-Oriented Programming</Card.Title>
                    <p>A popular paradigm to create easy to refractor sites using reusable code blocks and object-relational mapping. 
                </p>
                </Card.Body>
            </Card>
                </Col>

                <Col lg={4} md={4} sm={6} className='srvc-col'>
                    <Card>
                    <Card.Header className='srvc-header'> <h6>PWA</h6></Card.Header>
                    <Card.Body>
                    <Card.Title>Progressing Web Application</Card.Title>
                    <p>Web apps that use workers, manifests, and other features together to make the site as effecient as possible. 
                </p>
                </Card.Body>
            </Card>
                </Col>

              
            
            </Row>

        <div>
           <h5>Technologies learned</h5>
           <Row>        
        <div className='tech-logos'>
            <AiOutlineHtml5  size={50} color='orange' className="skl-logo"/>
            <IoLogoCss3 size={50} color='lightblue' className="skl-logo" />
            <IoLogoJavascript size={50} color='gold' className="skl-logo" />
            <FaBootstrap size={50} color='lightblue' className="skl-logo"/>
            <FaReact size={50} color="blue" className="skl-logo"/>
            <VscJson size={50} color='orange' className="skl-logo"/>
            <DiStackoverflow size={50} color='orange' className="skl-logo"/>
            <DiNodejs size={50} color='green' className="skl-logo"/>
            <DiNpm  size={50} color='red' className="skl-logo"/>
            <DiStackoverflow  size={50} color='lightorange' className="skl-logo"/>
            <SiMongodb size={50} color='green'  className="skl-logo"/>
            <SiExpress size={50}  className="skl-logo"/>
            <DiResponsive size={60} className='skl-logo'/>
        </div>
           </Row>
        </div>

        </section>
    )
}
export default Services;