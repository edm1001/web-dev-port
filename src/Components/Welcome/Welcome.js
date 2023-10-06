import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Photo from '../../Assets/photos/table.png';

const Welcome =  () => {
    return (
        <section>
            <Row className='hero' id="home">

            <Col lg={6} md={12} sm={12} className='text-center bg-dark'>
            <div className='welcome-img py-5 mb-5'>
                    <h1 className='fw-bold text-white'>Hello!</h1>
                    <p className='text-white px-2 pb-4'>
                    My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
                    </p>
            </div>
            </Col>

            <Col lg={6} md={12} sm={12} className=' text-center welcome-intro ' >
                    <div className='welcome-box'>
                    <Image src={Photo} as='div' className='d-flex justify-content-end' id='personal-photo'/>
                   
                    </div>
            </Col>
            </Row>



        </section>
    )
}
export default Welcome;