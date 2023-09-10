import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

const Welcome =  () => {
    return (
        <section>
        <div className='hero-section' id="home">
            <Row>

            <Col className='text-center bg-dark text-white'>
            small paragraph goes here
            </Col>
            <Col className='text-center'>
            my img goes here
            </Col>
            </Row>
        </div>



        </section>
    )
}
export default Welcome;