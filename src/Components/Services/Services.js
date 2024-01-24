import { useState } from 'react';
import {motion} from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {FaBootstrap, FaReact, FaWordpress} from 'react-icons/fa';
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io';
import {VscJson} from 'react-icons/vsc';
import {DiNpm, DiNodejs, DiStackoverflow, DiResponsive} from 'react-icons/di';
import {AiOutlineHtml5, AiFillGithub, AiFillApi} from 'react-icons/ai'
import {SiMongodb, SiExpress, SiHeroku, SiFramer, SiJquery, SiSequelize} from 'react-icons/si'
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

  const serviceCards = [
    {
        header: 'DSA',
        title: 'Data Structure & Algorithms',
        description: 'My knowledge of DSA enables me to efficiently manage and analyze data through structured scripting and algorithmic processes.'
    },
    {
        header: 'OOP',
        title: 'Object Oriented Programming',
        description: 'A popular paradigm to create easy to refractor sites using reusable code blocks and object-relational mapping.'
    },
    {
        header: 'MVC',
        title: 'Model View Controller',
        description: 'A framework pattern for computer softwares that easilhy distinguish related program logic into model, view, and controller elements.'
    },
    {
        header: 'PWA',
        title: 'Progressive Web Application',
        description: 'PWAs work on any platform with a compliant browser, offering a seamless user experience like native apps. They use service workers for offline access, push notifications, and enhanced performance.'
    }
  ]


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
                    {serviceCards.map((serviceCard, index) => (                      
                        <div key={index}>
                <motion.div
                    initial={{ opacity:0}}
                    whileInView={{opacity:1, transition:1.2}}
                    whileHover={{scale:1.2}}
                    > 
                    <Card className='w-100 h-100' border='secondary' >
                    <Card.Header className='srvc-header'> <h6>{serviceCard.header}</h6></Card.Header>
                    <Card.Body>
                    <Card.Title className='fw-small fs-6 text-warning'>{serviceCard.title}</Card.Title>
                    <p>
                    <ExpandableText descriptionLength={75}>
                    {serviceCard.description}
                    </ExpandableText>
                </p>
                </Card.Body>
                    </Card>
                    </motion.div>                     
                </div>
                ))}
                </Col>
            </Row>
            </Col>
        
            </Row>

            </Container>

        <div className='tech-learned py-2' >
           <h4 className='fs-2 text-warning fw-bold'>My Stack</h4>
           <Row className='px-2 mx-3 pt-2'>        
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:1.5}}
            whileHover={{scale:1.1}}
            className='cursor-pointer'
        >
            <AiOutlineHtml5 title="HTML5"  size={50} color='lightgrey' className="skl-logo"/>
            <IoLogoCss3 title="CSS3" size={50} color='lightgrey' className="skl-logo" />
            <IoLogoJavascript title="JavaScript" size={50} color='lightgrey' className="skl-logo" />
            <FaBootstrap title="Bootstrap" size={50} color='lightgrey' className="skl-logo"/>
            <SiJquery title="JQuery" size={50} color='lightgrey' className="skl-logo"/>
            <FaReact title="React" size={50} color='lightgrey' className="skl-logo"/>
            <VscJson title="JSON" size={50} color='lightgrey' className="skl-logo"/>
            <DiNodejs title="NodeJS" size={50} color='lightgrey'className="skl-logo"/>
            <DiNpm title="NPM" size={50} color='lightgrey' className="skl-logo"/>
            <DiStackoverflow title="Stack Overflow" size={50} color='lightgrey'className="skl-logo"/>
            <SiMongodb title='Mongo' size={50} color='lightgrey'className="skl-logo"/>
            <SiSequelize title='Sequelize' size={50} color='lightgrey'className="skl-logo"/>
            <SiExpress title="Express Router" size={50}  color='lightgrey' className="skl-logo"/>
            <DiResponsive title="Responsive Media" size={60} color='lightgrey'className='skl-logo'/>
            <AiFillGithub title="Github" size={50} color='lightgrey' className='skl-logo' />
            <BsFiletypeSql title="SQL" size={50} color='lightgrey' className='skl-logo'/>
            <AiFillApi title="APIs" size={50} color='lightgrey' className='skl-logo'/>
            <SiHeroku title="Heroku Cloud" size={50} color='lightgrey' className='skl-logo'/>
            <SiFramer title="Framer Motion" size={50} color='lightgrey' className='skl-logo'/>
            <FaWordpress title="WordPress" size={50} color='lightgrey' className='skl-logo'/>

        </motion.div>
           </Row>
        </div>

        </section>
    )
}
export default Services;