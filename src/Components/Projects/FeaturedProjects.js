import {useState} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image  from "react-bootstrap/Image";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Wordle from '../../Assets/port/wordle.gif';
import Chatterize from '../../Assets/port/chatterize.gif';
import TravelDiary from '../../Assets/port/travel-blog.gif';
import TripleJ from '../../Assets/port/triplej.gif';

import DailyScheduler from '../../Assets/port/daily-scheduler.gif';
import IssuesLookup from '../../Assets/port/git-issue-lookup.gif';
import PortGenerator from '../../Assets/port/portfolio=generator.gif';
import SalonSite from '../../Assets/port/salon-site.gif';
import Taskmaster from '../../Assets/port/task-master-pro.gif';
import Zookeepers from '../../Assets/port/zoo-inventory.gif'

const FeaturedProjects = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    // const [show10, setShow10] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);                                                                                                                                                                                                                                                       
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);                                                                                                                                                                                                                                                       
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);                                                                                                                                                                                                                                                       
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);                                                                                                                                                                                                                                                       
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);                                                                                                                                                                                                                                                       
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);                                                                                                                                                                                                                                                       
    // const handleClose10 = () => setShow10(false);
    // const handleShow10 = () => setShow10(true);                                                                                                                                                                                                                                                       
    
    return (
        <Row className=" d-flex justify-content-center py-5">
          
        <Col className="py-1" lg={3} md={4} sm={4} xs={6}>
          <Image  className='w-100 h-100 ftrd-img' src={Wordle} alt="" fluid onClick={handleShow}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={Chatterize} alt="" fluid onClick={handleShow2}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={TravelDiary} alt="" fluid onClick={handleShow3}></Image>
        </Col>

        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={TripleJ} alt="" fluid onClick={handleShow4}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6}>
          <Image  className='w-100 h-100 ftrd-img' src={Taskmaster} alt="" fluid onClick={handleShow9}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={IssuesLookup} alt="" fluid onClick={handleShow6}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={PortGenerator} alt="" fluid onClick={handleShow7}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={SalonSite} alt="" fluid onClick={handleShow8}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={DailyScheduler} alt="" fluid onClick={handleShow5}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={Zookeepers} alt="" fluid onClick={handleShow9}></Image>
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

        <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal5!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose5}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>
      
        <Modal show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal6!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose6}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show7} onHide={handleClose7}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal7!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose7}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show8} onHide={handleClose8}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal8!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose8}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show9} onHide={handleClose9}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal9!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose9}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        {/* <Modal show={show10} onHide={handleClose10}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal6!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose10}>
            Close
        </Button>
        </Modal.Footer>
        </Modal> */}



    </Row>
    )
};
export default FeaturedProjects;