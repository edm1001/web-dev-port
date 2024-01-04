import Card from 'react-bootstrap/Card'

import ListGroup from 'react-bootstrap/ListGroup';

import {FiExternalLink} from 'react-icons/fi'
import {AiOutlineRead} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';

const listProjectData = [
    {
        title:'Instagram Clone',
        description: 'An older instagram clone using JS and front end.',
        readmeLink: 'https://github.com/edm1001/instagram-clone/blob/main/README.md',
        githubLink: 'https://github.com/edm1001/instagram-clone',
        liveLink: 'https://edm1001.github.io/instagram-clone/'
    }
]

const ListProjects = () => {
    return (
        <Card>
            <Card.Header> More Projects!</Card.Header>
            <Card.Body>
              <ListGroup>
                {listProjectData.map((project, index) => (
                <ListGroup.Item 
                  as="li"
                  key={index}
                  className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <h6 className="fw-bold">
                    {project.title}
                    </h6>
                    {project.description}
                    </div>
                    <a 
                     href={project.liveLink}
                     className="btn btn-outline-secondary mx-1"
                     >
                    <FiExternalLink/>
                     </a>
                    <a href={project.githubLink} className="btn btn-outline-secondary mx-1"> <FiGithub/></a>
                    <a href={project.readmeLink} className="btn btn-outline-secondary mx-1" ><AiOutlineRead/></a>
                </ListGroup.Item>
                ))}

                </ListGroup>
            </Card.Body>
        </Card>
    )
};

export default ListProjects;