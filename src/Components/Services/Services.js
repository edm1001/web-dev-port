import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {FaBootstrap, FaReact} from 'react-icons/fa';
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io';
import {VscJson} from 'react-icons/vsc';
import {DiNpm, DiNodejs, DiStackoverflow, DiResponsive} from 'react-icons/di';
import {AiOutlineHtml5} from 'react-icons/ai'
import {SiMongodb, SiExpress} from 'react-icons/si'

const ExpandableText = ({ children, descriptionLength }) => {
    const fullText = children;
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <p className='text'>
        {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}...`}
        <span onClick={toggleText} className='toggle-button'>
          {isExpanded ? 'Show less' : 'Show more'}
        </span>
      </p>
    );
  };


const Services = () => {
    return (
        <section className='services' id='services'>
            <Container>


            <Row className='srvc-row' bg='dark' data-bs-theme='dark'>

            <Col lg={6} md={12} sm={12} >
                <div className=''>
                    <h2 className='text-warning fw-bold'> Services</h2>
                    <Row className='text-start fw-bold py-3 progress-row'>
                    <Col className='col-12 py-1 text-start'>
                        <h6>Full Stack Development:</h6> 
                        <ProgressBar animated variant='success' now={100} className='' />
                    </Col>
                    <Col  className='col-12 py-1 text-start' >
                        <h6>Front End Development:</h6>  
                        <ProgressBar animated variant='success' now={100} className='' />
                    </Col>
                    <Col  className='col-12 py-1' >
                        <h6>Back End Development:</h6>  
                        <ProgressBar animated variant='success' now={100} className=''/>
                    </Col>
                    <Col  className='col-12 py-1' >
                        <h6>CRUD Operations:</h6>  
                        <ProgressBar animated variant='success' now={100} className='' />
                    </Col>
                    <Col  className='col-12 py-1' >
                        <h6>Client Server Model:</h6>  
                        <ProgressBar animated variant='success' now={100} className='' />
                    </Col>
                    

                    </Row>
                </div>
            </Col>


            <Col lg={6} md={12} sm={12} >
            <Row className='py-3 px-2'>
                <Col lg={6} md={6} sm={6} xs={12} className='srvc-col'>
                    <Card className=' w-100 h-100' border='secondary'>
                    <Card.Header className='srvc-header'>
                        <h6 className='fw-bold'>MVC</h6></Card.Header>
                <Card.Body>
                    <Card.Title className='fw-small fs-5 text-warning'>Model View Controller</Card.Title>
                    <p>
                        <ExpandableText descriptionLength={50}>
                         A framework pattern for computer softwares that easilhy distinguish related program logic into model, view, and controller elements. 
                        </ExpandableText>
                </p>
                </Card.Body>
                     </Card>
                </Col>
                
                <Col lg={6} md={6} sm={6} xs={12} className='srvc-col'>
                    <Card className='w-100 h-100' border='secondary'>
                    <Card.Header className='srvc-header'> <h6 className='fw-bold'>OOP</h6></Card.Header>
                <Card.Body>
                    <Card.Title className='fw-small fs-6 text-warning'>Object-Oriented Programming</Card.Title>
                    <p>
                    <ExpandableText descriptionLength={50}>
                    A popular paradigm to create easy to refractor sites using reusable code blocks and object-relational mapping. 
                    </ExpandableText>
                </p>
                </Card.Body>
                        </Card>
                </Col>

                <Col lg={6} md={6} sm={6} xs={12}className='srvc-col'>
                    <Card className='w-100 h-100' border='secondary' >
                    <Card.Header className='srvc-header'> <h6>PWA</h6></Card.Header>
                    <Card.Body>
                    <Card.Title className='fw-small fs-6 text-warning'>Progressing Web Application</Card.Title>
                    <p>
                    <ExpandableText descriptionLength={50}>
                        Web apps that use workers, manifests, and other features together to make the site as effecient as possible. 
                    </ExpandableText>
                </p>
                </Card.Body>
                        </Card>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12} className='srvc-col'>
                    <Card className='w-100 h-100' border='secondary' >
                    <Card.Header className='srvc-header'> <h6>ORM</h6></Card.Header>
                    <Card.Body>
                    <Card.Title className='fw-small fs-6 text-warning'>Object Relational Mapping</Card.Title>
                    <p>
                    <ExpandableText descriptionLength={50}>
                        Web apps that use workers, manifests, and other features together to make the site as effecient as possible. 
                    </ExpandableText>
                </p>
                </Card.Body>
                        </Card>
                </Col>
            </Row>
            </Col>
        
            </Row>

            </Container>

        <div className='tech-learned' >
           <h4 className='fs-3 text-warning fw-bold'>Skills</h4>
           <Row className='px-5 py-3'>        
        <div className='skl-logos'>
            <AiOutlineHtml5  size={50} color='lightgrey' className="skl-logo"/>
            <IoLogoCss3 size={50} color='lightgrey' className="skl-logo" />
            <IoLogoJavascript size={50} color='lightgrey' className="skl-logo" />
            <FaBootstrap size={50} color='lightgrey' className="skl-logo"/>
            <FaReact size={50} color='lightgrey' className="skl-logo"/>
            <VscJson size={50} color='lightgrey' className="skl-logo"/>
            <DiStackoverflow size={50} color='lightgrey'className="skl-logo"/>
            <DiNodejs size={50} color='lightgrey'className="skl-logo"/>
            <DiNpm  size={50} color='lightgrey' className="skl-logo"/>
            <DiStackoverflow  size={50} color='lightgrey' className="skl-logo"/>
            <SiMongodb size={50} color='lightgrey'className="skl-logo"/>
            <SiExpress size={50}  className="skl-logo"/>
            <DiResponsive size={60} className='skl-logo'/>
        </div>
           </Row>
        </div>

        </section>
    )
}
export default Services;