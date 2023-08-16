import {Row, Col, Button, Form } from 'react-bootstrap';
import Resume from '../Resume/Resume.js';


const Contact = () => {
    return (
        <section className='contact'>

        <h2 style={{textAlign:'center'}}>Contact me through my Website</h2>
        <div className='contact-row'>
        <Row className='contact'>
            <Col lg={6} md={6} sm={12}> 
            <div className='contact-info'>
                {/* add icons here */}
                <a href='tel:00000'>(123) 456-7890</a><br/>
                <a href='mailto:edmerfranciz@gmail.com'>edmerfranciz@gmail.com</a><br/>
                <h6>Spring, Texas</h6>
                <Resume/>
                    
            </div>
            </Col>



            <Col className='contact-form'lg={6} md={6} sm={12} >
            <Form>
                <Form.Group>
                    <Row >
                        <Col>
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type='name' placeholder='Enter Name'></Form.Control></Col>
                        <Col>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type='subject' placeholder='Subject here'></Form.Control></Col>
                    </Row>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter your email'></Form.Control>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' rows={4} placeholder='Write your message here'>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' id='contact-btn'> Submit</Button>
            </Form>
            </Col>
        </Row>
        </div>
        </section>
    )
}

export default Contact;