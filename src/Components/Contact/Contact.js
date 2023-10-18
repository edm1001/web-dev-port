import {Row, Col, Button, Form } from 'react-bootstrap';
import {useRef, useState} from 'react';

import {FcGoogle} from 'react-icons/fc';
import {FaGithubAlt} from 'react-icons/fa';
import { validateEmail } from '../../utils/helpers';

// import {emailjs} from '@emailjs/browser';


const Contact = () => {

  // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  // const [errorMessage, setErrorMessage] = useState('');
  //   const { name, email, message, subject } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     setFormState({ [e.target.name]: e.target.value });
  //     console.log('Form', formState);
  //   }
  // };

  //   const handleChange = (e) => {
  //       if (e.target.name === 'email') {
  //         const isValid = validateEmail(e.target.value);
  //         if (!isValid) {
  //           setErrorMessage('Your email is invalid.');
  //         } else {
  //           setErrorMessage('');
  //         }
  //       } else {
  //         if (!e.target.value.length) {
  //           setErrorMessage(`${e.target.name} is required.`);
  //         } else {
  //           setErrorMessage('');
  //         }
  //       }
  //     };
  //     const form = useRef();

  //     const sendEmail = (e) => {
  //       e.preventDefault();
    
  //       emailjs.sendForm('personal_contact','contact_service', form.current, 'wLYbtp8s7HHiOK8mX')
  //         .then((result) => {
  //             console.log(result.text);
  //         }, (error) => {
  //             console.log(error.text);
  //         });


    return (
        <section className='contact' id='contact'>

        <h2 style={{textAlign:'center'}}>Contact me through my Website</h2>
        <div className='contact-row'>
        <Row className='contact'>
            <Col lg={6} md={6} sm={12}> 
            <div className='contact-info'>
                {/* add icons here */}
                <a href='tel:00000'>(123) 456-7890</a><br/>
                <a href='mailto:edmerfranciz@gmail.com'>edmerfranciz@gmail.com</a><br/>
                <h6>Spring, Texas</h6>
                <FcGoogle className='banner-logo' size={30}/>
                <FaGithubAlt id='banner-logo' color='lightgreen' size={30} />  
                <div>
                <Button href='/ResumePdf' variant="outline-secondary" >Resume</Button>
                </div>
                    
            </div>
            </Col>



            <Col className='mb-3 contact-form'lg={6} md={6} sm={12} >
            <Form ref={form} onSubmit={handleSubmit && sendEmail} className='p-5 message'>
                <Form.Group>
                    <Row >
                        <Col>
                        <Form.Label>Name</Form.Label>
                        <Form.Control required  name='suser_name' type='name' defaultValue={name} onBlur={handleChange} placeholder='Enter Name'></Form.Control></Col>
                        <Col>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type='subject' name='subject' defaultValue={subject} onBlur={handleChange} placeholder='Subject here'></Form.Control></Col>
                    </Row>
                    <Form.Label htmlFor=''>Email</Form.Label>
                    <Form.Control type='email' name='user_email' defaultValue={email} onBlur={handleChange} placeholder='Enter your email'></Form.Control>
                    <Form.Label>Message</Form.Label>
                    <Form.Control name='message' defaultValue={message} onBlur={handleChange}  as='textarea' rows={4} placeholder='Write your message here'>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' value='submit' id='contact-btn'> Submit</Button>
            </Form>
            </Col>
            
        </Row>
        </div>
        </section>
    )
}
// }

export default Contact;