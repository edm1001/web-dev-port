import { useState } from 'react';
import {motion} from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {FaBootstrap, FaReact} from 'react-icons/fa';
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io';
import {VscJson} from 'react-icons/vsc';
import {DiNpm, DiNodejs, DiStackoverflow, DiResponsive} from 'react-icons/di';
import {AiOutlineHtml5, AiFillGithub, AiFillApi} from 'react-icons/ai'
import {SiMongodb, SiExpress, SiHeroku, SiFramer} from 'react-icons/si'
import {BsFiletypeSql} from 'react-icons/bs'

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
                        <ProgressBar animated variant='warning' now={100} className='' />
                    </Col>
                    <Col  className='col-12 py-1 text-start' >
                        <h6>Front End Development:</h6>  
                        <ProgressBar animated variant='warning' now={100} className='' />
                    </Col>
                    <Col  className='col-12 py-1' >
                        <h6>Back End Development:</h6>  
                        <ProgressBar animated variant='warning' now={100} className=''/>
                    </Col>
                    <Col  className='col-12 py-1' >
                        <h6>CRUD Operations:</h6>  
                        <ProgressBar animated variant='warning' now={100} className='' />
                    </Col>
                    <Col  className='col-12 py-1' >
                        <h6>Client Server Model:</h6>  
                        <ProgressBar animated variant='warning' now={100} className='' />
                    </Col>
                    

                    </Row>
                </div>
            </Col>


            <Col lg={6} md={12} sm={12} >
            <Row className='my-3 mx-2'>

                <Col lg={6} md={6} sm={6} xs={12} className='srvc-col'>
                    <motion.div
                        initial={{ opacity:0}}
                        whileInView={{opacity:1, transition:1.2}}
                        whileHover={{scale:1.2}}
                    >
                    <Card className=' w-100 h-100' border='secondary'>
                    <Card.Header className='srvc-header'>
                        <h6 className='fw-bold'>MVC</h6></Card.Header>
                    <Card.Body>
                    <Card.Title className='fw-small fs-6 text-warning'>Model View Controller</Card.Title>
                    <p>
                        <ExpandableText descriptionLength={75}>
                         A framework pattern for computer softwares that easilhy distinguish related program logic into model, view, and controller elements. 
                        </ExpandableText>
                    </p>
                    </Card.Body>
                     </Card>
                    </motion.div>
                </Col>
                
                <Col lg={6} md={6} sm={6} xs={12} className='srvc-col'>
                <motion.div
                    initial={{ opacity:0}}
                    whileInView={{opacity:1, transition:1.2}}
                    whileHover={{scale:1.2}}
                    >
                    <Card className='w-100 h-100' border='secondary'>
                    <Card.Header className='srvc-header'> <h6 className='fw-bold'>OOP</h6></Card.Header>
                <Card.Body>
                    <Card.Title className='fw-small fs-6 text-warning'>Object-Oriented Programming</Card.Title>
                    <p>
                    <ExpandableText descriptionLength={75}>
                    A popular paradigm to create easy to refractor sites using reusable code blocks and object-relational mapping. 
                    </ExpandableText>
                </p>
                </Card.Body>
                        </Card>
                    </motion.div>
                </Col>

                <Col lg={6} md={6} sm={6} xs={12}className='srvc-col'>
                <motion.div
                    initial={{ opacity:0}}
                    whileInView={{opacity:1, transition:1.2}}
                    whileHover={{scale:1.2}}
                    >
                    <Card className='w-100 h-100' border='secondary' >
                    <Card.Header className='srvc-header'> <h6>PWA</h6></Card.Header>
                    <Card.Body>
                    <Card.Title className='fw-small fs-6 text-warning'>Progressing Web Application</Card.Title>
                    <p>
                    <ExpandableText descriptionLength={75}>
                        Web apps that use workers, manifests, and other features together to make the site as effecient as possible. 
                    </ExpandableText>

                </p>
                </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12} className='srvc-col'>
                <motion.div
                    initial={{ opacity:0}}
                    whileInView={{opacity:1, transition:1.2}}
                    whileHover={{scale:1.2}}
                    > 
                    <Card className='w-100 h-100' border='secondary' >
                    <Card.Header className='srvc-header'> <h6>ORM</h6></Card.Header>
                    <Card.Body>
                    <Card.Title className='fw-small fs-6 text-warning'>Object Relational Mapping</Card.Title>
                    <p>
                    <ExpandableText descriptionLength={75}>
                        A framework that simplifies the interchange between the two paradigms, the object and relational database tables.
                    </ExpandableText>
                </p>
                </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            </Row>
            </Col>
        
            </Row>

            </Container>

        <div className='tech-learned py-2' >
           <h4 className='fs-2 text-warning fw-bold'>Skills</h4>
           <Row className='px-5'>        
        <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:1}}
            whileHover={{scale:1.2}}
        >
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
            <SiExpress size={50}  color='lightgrey' className="skl-logo"/>
            <DiResponsive size={60} color='lightgrey'className='skl-logo'/>
            <AiFillGithub  size={50} color='lightgrey' className='skl-logo' />
            <BsFiletypeSql  size={50} color='lightgrey' className='skl-logo'/>
            <AiFillApi  size={50} color='lightgrey' className='skl-logo'/>
            <SiHeroku  size={50} color='lightgrey' className='skl-logo'/>
            <SiFramer  size={50} color='lightgrey' className='skl-logo'/>
        </motion.div>
           </Row>
        </div>

        </section>
    )
}
export default Services;