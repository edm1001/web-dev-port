import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Photo from '../../Assets/photos/table.png';

const Welcome =  () => {
    return (
        <section>
            <Row className='hero' id="home">

            <Col lg={6} md={12} sm={12} className='text-center bg-dark'>
            <div className='welcome-img'>
            <div className='welcome-info text-white'> 
                    <h1 className='fw-bold'>Hello!</h1>
                    My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
                    </div>
            </div>
            </Col>

            <Col lg={6} md={12} sm={12} className=' text-center h-100 welcome-intro ' >
                    <div className='welcome-box'>
                    <Image src={Photo} className='' id='personal-photo'/>
                   
                    </div>
            </Col>
            </Row>



        </section>
    )
}
export default Welcome;