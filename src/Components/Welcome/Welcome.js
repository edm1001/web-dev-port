import {motion} from 'framer-motion';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Photo from '../../Assets/photos/personal/clr-self.png';

const Welcome =  () => {
    return (
        <section>
            <Row className='hero' id="home">

            <Col lg={6} md={12} sm={12} className='text-center bg-dark'>
            <motion.div
                                    initial={{x:-200}}
                                    whileInView={{x:-25 }}              
            className='welcome-img px-5 mb-5' >
                    <h1 className='fw-bold text-warning text-start ps-5'>Hello!</h1>
                    <p className='text-white text-start ps-5'>
                    My name is Edmer Valencia, I am a Full Stack Developer that graduated from the coding bootcamp program offered in University of Texas at Austin. I am eager to learn and create various technologies and projects.
                    </p>
            </motion.div>
            </Col>

            <Col lg={6} md={12} sm={12} className='bg-dark pb-4' >
                    <motion.div
                        initial={{x:200}}
                        whileInView={{x:40}}
                        transition={{delay:1}} 

                            className='welcome-box'>
                    <motion.div
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:1.2}}
                    />
                   <Image src={Photo} as='div' className='h-100 w-100 p-4 mb-2 ' id='personal-photo'></Image>
                    </motion.div>
            </Col>
            </Row>



        </section>
    )
}
export default Welcome;