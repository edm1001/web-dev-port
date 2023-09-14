import Card from 'react-bootstrap/Card'

import ListGroup from 'react-bootstrap/ListGroup';

import {FiExternalLink} from 'react-icons/fi'
import {AiOutlineRead} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';

const ListProjects = () => {
    return (
        <Card>
            <Card.Header> More Projects!</Card.Header>
            <Card.Body>
                <ListGroup>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Subheading</h6>
                    Cras justo odio
                    </div>
        <a href='/'><FiExternalLink/></a>
        <FiGithub><a href='#'className="px-2"></a></FiGithub>
        <AiOutlineRead><a href='#' className="px-2"></a></AiOutlineRead>
      </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
};

export default ListProjects;