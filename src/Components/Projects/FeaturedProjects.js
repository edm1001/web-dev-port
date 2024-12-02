import {useState} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Chatterize from '../../Assets/port/chatterize.gif';
import TravelDiary from '../../Assets/port/travel-blog.gif';
import TripleJ from '../../Assets/port/triplej.gif';
import IssuesLookup from '../../Assets/port/git-issue-lookup.gif';
import PortGenerator from '../../Assets/port/portfolio=generator.gif';
import SalonSite from '../../Assets/port/salon-site.gif';
import Chatapp from '../../Assets/port/chat-app.gif';
import {motion} from 'framer-motion';
import {AiFillGithub} from 'react-icons/ai';
import { FiExternalLink } from "react-icons/fi";
import Blogsite from '../../Assets/port/blogsite.gif';
import Aquamania from '../../Assets/port/aquamania.gif';

const projectData = [
  {
    image: Aquamania,
    title: "Aquamania",
    description: "Aquamania is an aquarist guide to research new fish and find inspiration! Dive into the mesmerizing world under the water and discover a world of wonder and .",
    githubLink: "https://github.com/edm1001/aquamania",
    liveLink: "https://edm1001.github.io/aquamania/",
  },
  {
    image: Blogsite,
    title: "Blog App",
    description: "The blog site empowers users to effortlessly sign up or log in, facilitating seamless creation, updating, or deletion of posts, alongside the convenient option to upload files to enhance their posts.",
    githubLink: "https://github.com/edm1001/mern-blog",
    liveLink: "https://edm1001.github.io/mern-blog/"
  },
  {
    image: Chatapp,
    title: "Chat App",
    description: "The chat app enables users to engage in real-time conversations with multiple users while conveniently monitoring their online/offline status. Additionally, it offers seamless authentication through sign-in or registration, ensuring a personalized and secure user experience.",
    githubLink: "https://github.com/edm1001/mern-chat-app",
    liveLink: "https://edm1001.github.io/mern-chat-app/",
  },
  {
    image: TripleJ,
    title: "Triple J Wild Game Birds",
    description: "This online store, developed in partnership with a local company, showcases birds and their products available to customers. Users can explore detailed information about the birds, including care instructions, while also accessing a convenient contact form to provide inquiry about the company.",
    githubLink: "Not Available",
    liveLink: "www.triplejwildgamebirds.com"
  },

  {
    image: IssuesLookup ,
    title: "Github Issues Search",
    description: "This app allows users to search for GitHub issues within specific repositories. Users can browse through projects and view the status of issues, identifying whether they're completed or not. Users are then empowered to decide whether to contribute or read further on the repository's issues.",
    githubLink: "https://github.com/edm1001/git-it-done",
    liveLink: "https://edm1001.github.io/git-it-done/"
  },
  {
    image: PortGenerator ,
    title: "Portfolio Generator",
    description: "This Node.js app simplifies the creation of static HTML portfolios. Upon installation, users provide information for their portfolio, and the app generates an index.html file based on their input. To use the app, users must clone it from GitHub.",
    githubLink: "https://github.com/edm1001/node-portfolio-gen",
    liveLink: "Not Available"
  },
  {
    image: Chatterize ,
    title: "Chatterize Messenger",
    description: "This is messaging app for users that choose to talk about anything! This app was a group project and has an amazing messagging functions for its users to talk to one another. The app also has an option to sign up and log in, in order to chat with one another.",
    githubLink: "https://github.com/xJaimeGx/chatterize",
    liveLink: "https://chatterize123.herokuapp.com/"
  },
  {
    image: SalonSite,
    title: "Salon Website",
    description: "This is a frontend app served as a platform for a local salon in Houston, Texas, offering users information about the salon and its services. However, the reservation function was removed because it required a subscription from an external service provider.",
    githubLink: "https://github.com/edm1001/vitalz-barbershop",
    liveLink: "https://edm1001.github.io/vitalz-barbershop/"
  },
  {
    image: TravelDiary,
    title: "Travel Blog",
    description: "The travel blog app enables users to search for destinations by city and country, providing detailed information such as popular restaurants and travel safety. Users can register to create posts, view reviews from other users, and leave comments if logged in.",
    githubLink: "https://afternoon-harbor-62644.herokuapp.com/",
    liveLink: "https://github.com/strudelAndCoffee/travel-log-dashboard"
  },
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setSelectedProject(null);
  const handleShow = (project) => setSelectedProject(project);

  return (
    <Row className="d-flex justify-content-center py-5">
      {projectData.map((project, index) => (
        <Col key={index} className="py-1" lg={3} md={3} sm={3} xs={4}>
          <motion.img
            className="w-100 h-100 ftrd-img"
            src={project.image}
            alt={project.title}
            fluid
            onClick={() => handleShow(project)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: 1.2 }}
            whileHover={{ scale: 1.2 }}
          />
        </Col>
      ))}

      <Modal show={selectedProject !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedProject?.description}</Modal.Body>
        <Modal.Footer>
          <a className="btn btn-outline-info" href={selectedProject?.githubLink}>
            <AiFillGithub size={25} />
          </a>
          {selectedProject?.liveLink && (
            <a className="btn btn-outline-info" href={selectedProject?.liveLink}>
              <FiExternalLink size={25} />
            </a>
          )}
          <Button variant="outline-info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default FeaturedProjects;