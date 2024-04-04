import {useState} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
import Zookeepers from '../../Assets/port/zoo-inventory.gif';
import Bookshop from '../../Assets/port/book-shop.gif';
import Chatapp from '../../Assets/port/chat-app.gif';
import Blogsite from '../../Assets/port/blogsite.gif';

import {motion} from 'framer-motion';

import {AiFillGithub} from 'react-icons/ai';
import { FiExternalLink } from "react-icons/fi";


const projectData = [
  {
    image: Blogsite,
    title: "Blog App",
    description: "The blog site empowers users to effortlessly sign up or log in, facilitating seamless creation, updating, or deletion of posts, alongside the convenient option to upload files to enhance their posts.",
    githubLink: "https://github.com/edm1001/mern-blog",
    liveLink: "https://edm1001.github.io/mern-blog/"
  },
  {
    image: Bookshop,
    title: "Book Shop",
    description: "The frontend bookshop app allows users to seamlessly create, delete, and update their book inventory, providing a user-friendly interface for managing their collection effortlessly.",
    githubLink: "https://github.com/edm1001/book-app",
    liveLink: " https://edm1001.github.io/book-app/"
  },
  {
    image: Chatapp,
    title: "Chat App",
    description: "The chat app enables users to engage in real-time conversations with multiple users while conveniently monitoring their online/offline status. Additionally, it offers seamless authentication through sign-in or registration, ensuring a personalized and secure user experience.",
    githubLink: "https://github.com/edm1001/mern-chat-app",
    liveLink: "https://edm1001.github.io/mern-chat-app/",
  },
  {
    image: Wordle,
    title: "Wordle Game",
    description: "This is a Wordle clone, recreated using JavaScript. Players guess a five-letter word by selecting letters and pressing enter. Correct letters in the right position turn green, those correct but in the wrong position turn orange, while incorrect letters remain black, with multiple chances for guessing. Good luck!",
    githubLink: "https://github.com/edm1001/wordle-clone",
    liveLink: "https://edm1001.github.io/wordle-clone/",
  },
  {
    image: Zookeepers ,
    title: "Zoo Inventory List",
    description: "This inventory app showcases the zoo's animal collection, allowing users to view all animals along with relevant information. Users can utilize the filter function to locate specific animals efficiently. Additionally, the app provides access to information about the zookeepers responsible for caring for these animals.",
    githubLink: "https://github.com/edm1001/zookeepr",
    liveLink: "https://edm1001.github.io/zookeepr/"
  },
  {
    image: TripleJ,
    title: "Triple J Wild Game Birds",
    description: "This online store, developed in partnership with a local company, showcases birds and their products available to customers. Users can explore detailed information about the birds, including care instructions, while also accessing a convenient contact form to provide inquiry about the company.",
    githubLink: "Not Available",
    liveLink: "www.triplejwildgamebirds.com"
  },
  {
    image: Taskmaster ,
    title: "To Do List",
    description: "The to-do list app lets users organize tasks into sections like a sudoku board: To-Do, In Progress, In Review, and Done. Users can easily create, move, and delete tasks, dragging items to the bottom to mark as complete or deleting all tasks with a single click.",
    githubLink: "https://github.com/edm1001/taskmaster-pro",
    liveLink: "https://edm1001.github.io/taskmaster-pro/"
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
  {
    image: DailyScheduler,
    title: "Daily Task Scheduler",
    description: "The daily task scheduling app features time slots from 1AM to 5PM, where past slots turn red while the current one is green. Users can create tasks and save them locally using the save button, allowing reuse for different days or times.",
    githubLink: "https://github.com/edm1001/i-like-tortoises-05",
    liveLink: "https://edm1001.github.io/i-like-tortoises-05/"
  }
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setSelectedProject(null);
  const handleShow = (project) => setSelectedProject(project);

  return (
    <Row className="d-flex justify-content-center py-5">
      {projectData.map((project, index) => (
        <Col key={index} className="py-1" lg={3} md={4} sm={4} xs={6}>
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