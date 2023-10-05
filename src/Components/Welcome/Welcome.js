import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Photo from '../../Assets/photos/table.png';

const Welcome =  () => {
    return (
        <section>
            <Row className='hero' id="home">

            <Col lg={6} md={12} sm={12} className='text-center bg-info'>
            <div className='welcome-img'>
               <Image src={Photo} className='' id='personal-photo'/>
            </div>
            </Col>

            <Col lg={6} md={12} sm={12} className=' text-center h-100 welcome-intro ' >
                    <div className='welcome-box'>
                    <div className='welcome-info text-black'> 
                    <h1>color frame</h1>
                    My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
                    </div>
                    </div>
            </Col>
            </Row>



        </section>
    )
}
export default Welcome;