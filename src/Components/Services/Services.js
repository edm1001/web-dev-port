import {Card , Row, Col} from 'react-bootstrap';

import {FaReact} from 'react-icons/fa';


const Services = () => {
    return (
        <section className='services'>
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
        <div className='tech-logos'>
            <FaReact/>
        </div>
        </div>

        </section>
    )
}
export default Services;