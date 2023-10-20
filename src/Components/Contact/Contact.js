import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {Row, Col, Button, Form } from 'react-bootstrap';
import {FcGoogle} from 'react-icons/fc';
import {FaGithubAlt} from 'react-icons/fa';
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import {GiTexas} from 'react-icons/gi'
// import { validateEmail } from '../../utils/helpers';


const Contact = () => {
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('personal_contact','contact_service', form.current, 'wLYbtp8s7HHiOK8mX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        }
    return ( 
        <section className='contact' id='contact'>

        <h2 style={{textAlign:'center'}}>Contact me through my Website</h2>
        <div className='contact-row'>
        <Row className='contact'>
            <Col lg={6} md={6} sm={12} > 
            <div className='contact-info'>
                <a href='tel:9563720283' className='my-2'><BsFillTelephoneOutboundFill color='gold' size={25}/></a><br/>
                <a href='mailto:edmerfranciz@gmail.com'><FcGoogle size={30} className='my-2'/></a><br/>
               <a href='https://github.com/edm1001'><FaGithubAlt color='gold' size={30} className='mb-1' /></a>   
                <p className='fw-bold'>Spring, Texas <GiTexas size={20} color='darkorange'/></p> 
                <div>
                <Button className='my-2' href='/ResumePdf' variant="outline-dark" >Resume</Button>
                </div>
                    
            </div>
            </Col>



            <Col className='mb-3 contact-form'lg={6} md={6} sm={12} >
            <Form ref={form} onSubmit={sendEmail} className='p-5 message'>
                <Form.Group>
                    <Row >
                        <Col>
                        <Form.Label>Name</Form.Label>
                        <Form.Control as="input" required  name="user_name" type="name" placeholder="Enter Name"></Form.Control></Col>
                        <Col>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="subjec" name="subject" placeholder='Subject here'></Form.Control></Col>
                    </Row>
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type='email' name='user_email'   placeholder='Enter your email' as='input'></Form.Control>

                    <Form.Label>Message</Form.Label>
                    <Form.Control required name="message" as='textarea' rows={4} placeholder='Write your message here'>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" className="my-2" variant='secondary' value="Send"> Submit</Button>
            </Form>
            </Col>
            
        </Row>
        </div>
        </section>
    )

}

export default Contact;