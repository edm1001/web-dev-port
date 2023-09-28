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
               <Image src={Photo} className='h-60 w-70' />
            </div>
            </Col>

            <Col lg={6} md={12} sm={12} className=' text-center h-100 welcome-intro ' >
                    <div className='welcome-box'>
                    <div className='welcome-info text-black py-3 ps-5'> 
                    {/* add a intro info box about me, what made me into coding and path i took */}
                    <h1>color frame</h1>
                    <p>LOREM@KSDNCIAUCKJASNIUANCKJANOI</p>
                    <p>LOREM@KSDNCIAUCKJASNIUANCKJANOI</p>
                    <p>LOREM@KSDNCIAUCKJASNIUANCKJANOI</p>
                    </div>
                    </div>
            </Col>
            </Row>



        </section>
    )
}
export default Welcome;