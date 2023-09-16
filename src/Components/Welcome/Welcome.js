import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

const Welcome =  () => {
    return (
        <section>
            <Row className='hero' id="home">

            <Col className='text-center welcome-pic'>
            <div>
                {/* add a intro info box about me, what made me into coding and path i took */}
            </div>
            </Col>

            <Col className=' text-center ' >
                    <div className='welcome-box'>
                    <div className='welcome-info text-black py-3 ps-5'>
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