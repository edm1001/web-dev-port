import {useState} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image  from "react-bootstrap/Image";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Wordle from '../../Assets/port/wordle.gif';
import Chatterize from '../../Assets/port/chatterize.gif';
import TravelDiary from '../../Assets/port/travel-blog.gif';
import TripleJ from '../../Assets/port/triplej.gif'

const FeaturedProjects = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    
    return (
        <Row className=" d-flex justify-content-center py-5">
        <Col lg={3} md={4} sm={6} >
          <Image  className='w-100 h-100 ftrd-img' src={Wordle} alt="" fluid onClick={handleShow}></Image>
        </Col>

        <Col lg={3} md={4} sm={6} >
          <Image  className='w-100 h-100 ftrd-img' src={Chatterize} alt="" fluid onClick={handleShow2}></Image>
        </Col>

        <Col lg={3} md={4} sm={6} >
          <Image  className='w-100 h-100 ftrd-img' src={TravelDiary} alt="" fluid onClick={handleShow3}></Image>
        </Col>

        <Col lg={3} md={4} sm={6} >
          <Image  className='w-100 h-100 ftrd-img' src={TripleJ} alt="" fluid onClick={handleShow4}></Image>
        </Col>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal2!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose2}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal3!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose3}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal4!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose4}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>
 
    </Row>
    )
};
export default FeaturedProjects;