import {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image  from "react-bootstrap/Image";
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import {FiExternalLink} from 'react-icons/fi'
import {AiOutlineRead} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi'
import Wordle from "../Assets/port/wordle.gif";

// make modal for featured Projects

const Portfolio = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        // have a list under the featured proj for "other projects"
        // the projects have a live link, github link, link to the readme
        <section className="portfolio">
        <h1 className='text-center' id=''>Projects Page</h1>
        <Container className="portfolio">
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











{/* list starts here */}
        <Row>
        <Card>
            <Card.Header> More Projects!</Card.Header>
            <Card.Body>
                <ListGroup>
                <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <a href='/'><FiExternalLink/></a>
        <FiGithub><a href='#'className="px-2"></a></FiGithub>
        <AiOutlineRead><a href='#' className="px-2"></a></AiOutlineRead>
      </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
        </Row>
        </Container>
        
        </section>
    )
}

export default Portfolio;