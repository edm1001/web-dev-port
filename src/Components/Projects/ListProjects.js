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
                    <h6 className="fw-bold">Instagram Clone</h6>
                    An older instagram clone using JS and front end!
                    </div>
        <a href='https://edm1001.github.io/instagram-clone/'><FiExternalLink/></a>
        <a href='https://github.com/edm1001/instagram-clone'className="px-2"> <FiGithub/></a>
        <a href='https://github.com/edm1001/instagram-clone/blob/main/README.md' ><AiOutlineRead/></a>
      </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
};

export default ListProjects;