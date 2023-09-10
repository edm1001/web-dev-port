import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import {FiExternalLink} from 'react-icons/fi'
import {AiOutlineRead} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi'
// import row col and natiner lg=3 md -4 sm =6 =20 featured
const Portfolio = () => {
    return (
        // have a list under the featured proj for "other projects"
        // the projects have a live link, github link, link to the readme
        <section className="portfolio">
        <h1 className='text-center' id=''>Projects Page</h1>
        <Container className="portfolio">
        <Row className="py-3">
            <Col lg={3} md={4} sm={6} >proj1</Col>
            <Col lg={3} md={4} sm={6} >proj2</Col>
            <Col lg={3} md={4} sm={6} >proj3</Col>
            <Col lg={3} md={4} sm={6} >proj4</Col>
            <Col lg={3} md={4} sm={6} >proj5</Col>
            <Col lg={3} md={4} sm={6} >proj6</Col>
            <Col lg={3} md={4} sm={6} >proj7</Col>
            <Col lg={3} md={4} sm={6} >proj8</Col>

        </Row>

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
        <FiExternalLink><a href='/'></a></FiExternalLink>
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