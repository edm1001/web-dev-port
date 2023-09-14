import {useState} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image  from "react-bootstrap/Image";
import Modal from 'react-bootstrap/Modal';
import Wordle from '../../Assets/port/wordle.gif'
import Button from 'react-bootstrap/Button'

const FeaturedProjects = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Row className=" d-flex justify-content-center py-5">
        <Col lg={3} md={4} sm={6} >
          <Image  className='w-100 h-100 ftrd-img' src={Wordle} alt="" fluid onClick={handleShow}></Image>
        </Col>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <Button variant="info" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>


    </Row>
    )
};
export default FeaturedProjects;