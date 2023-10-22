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
                    An older instagram clone using JS and front end.
                    </div>
                    <a href='https://edm1001.github.io/instagram-clone/' className="btn btn-outline-secondary mx-1"><FiExternalLink/></a>
                    <a href='https://github.com/edm1001/instagram-clone' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/instagram-clone/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>

                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Analog Clock</h6>
                    A functional clock based on users current location using Javascript.
                    </div>
                    <a href='https://edm1001.github.io/js-clock/' className="btn btn-outline-secondary mx-1"><FiExternalLink/></a>
                    <a href='https://github.com/edm1001/js-clock' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/js-clock/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>

                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Read-Me Generator</h6>
                    A backend app that generates a read me file for repositories. *User must clone repo to use
                    </div>
                    <a href='https://github.com/edm1001/read-me-gen22' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/read-me-gen22/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>
                
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">RPG Battle Game</h6>
                    A backend turn based battle game using Node and jest!  *User must clone repo to use
                    </div>
                    <a href='https://github.com/edm1001/jest-rpg-game' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/jest-rpg-game/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>

                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">React Calculator</h6>
                    A calculator app built using ReactJS.
                    </div>
                    <a href='https://edm1001.github.io/react-calc/' className="btn btn-outline-secondary mx-1"><FiExternalLink/></a>
                    <a href='https://github.com/edm1001/react-calc' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/react-calc/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>
                
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Blackjack Game</h6>
                    A Blackjack game app using Vanilla JS.
                    </div>
                    <a href='https://edm1001.github.io/blackjackgame/' className="btn btn-outline-secondary mx-1"><FiExternalLink/></a>
                    <a href='https://github.com/edm1001/blackjackgame' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/blackjackgame/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>
                
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Counter App</h6>
                    A number counter app using Vanilla JS.
                    </div>
                    <a href='https://edm1001.github.io/online-counter/' className="btn btn-outline-secondary mx-1"><FiExternalLink/></a>
                    <a href='https://github.com/edm1001/online-counter' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/online-counter/edit/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>
                
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Weather Checker</h6>
                    An app that checks the weather for the week based on users location.
                    </div>
                    <a href='https://edm1001.github.io/online-counter/' className="btn btn-outline-secondary mx-1"><FiExternalLink/></a>
                    <a href='https://github.com/edm1001/online-counter' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/online-counter/edit/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>



                </ListGroup>
            </Card.Body>
        </Card>
    )
};

export default ListProjects;