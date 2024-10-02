import {motion} from 'framer-motion';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Photo from '../../Assets/photos/personal/clr-self.png';

const Welcome =  () => {
    return (
<section>
    <Row className='hero' id="home">
        {/* Text Column */}
        <Col lg={6} md={6} sm={12} xs={12} className='text-center bg-dark'>
            <motion.div
                initial={{ x: -200 }}
                whileInView={{ x: -25 }}              
                className='welcome-img px-4 py-5' // Removed extra margin
            >
                <h1 className='fw-bold text-warning text-start ps-lg-5 ps-2'>Hello!</h1> {/* Adjust padding for mobile */}
                <p className='text-white text-start ps-lg-5 ps-2'> {/* Same padding adjustment */}
                    My name is Edmer Valencia, and I am a Full Stack Developer with a background in web development, having completed the coding bootcamp at the University of Texas at Austin.
                </p>
                <p className='text-white text-start ps-lg-5 ps-2'>
                    I am passionate about learning and applying my skills to develop innovative technologies and dynamic projects.
                </p>
            </motion.div>
        </Col>

        {/* Image Column */}
        <Col lg={6} md={6} sm={12} xs={12} className='bg-dark d-flex justify-content-center align-items-center pb-4 overflow-hidden'> {/* Flexbox for centering */}
            <motion.div
                initial={{ x: 200 }}
                whileInView={{ x: 40 }}
                transition={{ delay: 1 }} 
                className='welcome-box'
                style={{ maxWidth: '100%', width: '100%' }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    <Image src={Photo} id='personal-photo' className='img-fluid rounded-circle' /> {/* Added img-fluid for responsive image */}
                </motion.div>
            </motion.div>
        </Col>
    </Row>
</section>

    )
}
export default Welcome;