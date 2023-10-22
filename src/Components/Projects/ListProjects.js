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
                    <a href='https://github.com/edm1001/online-counter/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>
                
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Weather Checker</h6>
                    An app that checks the weather for the week based on users location.
                    </div>
                    <a href='https://edm1001.github.io/weather-checker/' className="btn btn-outline-secondary mx-1"><FiExternalLink/></a>
                    <a href='https://github.com/edm1001/weather-checker' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/weather-checker/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>

                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Team Creator</h6>
                    A backend app that ouputs a work setting team with different positions.  *User must clone repo to use
                    </div>
                    <a href='https://github.com/edm1001/team-creator10' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/team-creator10/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>
                
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Regex Tutorial</h6>
                    A regex tutorial users or devs can read to make easy validations in an app.
                    </div>
                    <a href='https://github.com/edm1001/Regex-tutorial-peach' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/Regex-tutorial-peach/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>

                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Voting App</h6>
                    A backend voting app that has CRUD principles with voters and candidates.  *User must clone repo to use
                    </div>
                    <a href='https://github.com/edm1001/u-develop-it' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/u-develop-it/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>
                
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Run Buddy</h6>
                    An app that checks the weather for the week based on users location.
                    </div>
                    <a href='https://edm1001.github.io/run-buddy/' className="btn btn-outline-secondary mx-1"><FiExternalLink/></a>
                    <a href='https://github.com/edm1001/run-buddy' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/run-buddy/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>

                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Currency Checker</h6>
                    An app that allows users to check the currency and compare them with others around the world.
                    </div>
                    <a href='https://edm1001.github.io/Currency-Checker/' className="btn btn-outline-secondary mx-1"><FiExternalLink/></a>
                    <a href='https://github.com/edm1001/Currency-Checker' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/Currency-Checker/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>

                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Employee Tracker</h6>
                    A backend app that allows tracking of employees in a workspace with CRUD functions using SQL.  *User must clone repo to use
                    </div>
                    <a href='https://github.com/edm1001/e.tracker.12' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/e.tracker.12/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>

                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">Bootstrap Portfolio</h6>
                    My  personal portfolio using JS and bootstrap!
                    </div>
                    <a href='https://edm1001.github.io/edm1001.bootstrap-port.io/' className="btn btn-outline-secondary mx-1"><FiExternalLink/></a>
                    <a href='https://github.com/edm1001/edm1001.bootstrap-port.io' className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href='https://github.com/edm1001/edm1001.bootstrap-port.io/blob/main/README.md' className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
};

export default ListProjects;