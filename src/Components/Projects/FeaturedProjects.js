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

import {motion} from 'framer-motion';

import {AiFillGithub} from 'react-icons/ai';
import { FiExternalLink } from "react-icons/fi";


const projectData = [
  {
    image: Wordle,
    title: "Wordle Game",
    description: " This is a clone of the popular game Wordle! In this project we use Javascript to recreate a word guessing game, We guess the five letter word by choosing a choice of letters and press enter If the letter chosen by the user is correct and in position, the letter box will turn green. If the letter chosen is correct but in wrong position, it will turn orange. The wrong letters will remain black, and the user will have chances to guess the word right! Good Luck!",
    githubLink: "https://github.com/edm1001/wordle-clone",
    liveLink: "https://edm1001.github.io/wordle-clone/",
  },
  {
    image:Chatterize ,
    title: "Chatterize Messenger",
    description: "This is messaging app for users that choose to talk about anything! This app was a group project and has an amazing messagging functions for its users to talk to one another. The app also has an option to sign up and log in, in order to chat with one another.",
    githubLink: "https://github.com/xJaimeGx/chatterize",
    liveLink: "https://chatterize123.herokuapp.com/"
  },
  {
    image: Zookeepers ,
    title: "Zoo Inventory List",
    description: " This is a inventory app that lists the animals in the zoo! If user wants to find the animal lists, user can click on view animals and it will list all the animals with some info on that animal. The user can also use the filter function to categorize and find a specific animal. The user can also find the zookeepers that tend to these animals!",
    githubLink: "https://github.com/edm1001/zookeepr",
    liveLink: "https://edm1001.github.io/zookeepr/"
  },
  {
    image: TripleJ,
    title: "Triple J Wild Game Birds",
    description: "This is an online store I've partnered with a local company. This app shows its users the birds and products that the company offers to its customers. The bird section will have a bit of info with the birds and the care for them. App will also have a contact form on the site for easy contact and have some info on the company.",
    githubLink: "Not Available",
    liveLink: "www.triplejwildgamebirds.com"
  },
  {
    image: Taskmaster ,
    title: "To Do List",
    description: "This app is a to-do list that lets users create tasks. This app allows users to set their tasks into different sections like a sudoku board. App has following sections: To-Do, In Progress, In Review, Done. Users can drag the item to the bottom to delete the task once finished, with an option to delete all tasks on top of the app.",
    githubLink: "https://github.com/edm1001/taskmaster-pro",
    liveLink: "https://edm1001.github.io/taskmaster-pro/"
  },
  {
    image: IssuesLookup ,
    title: "Github Issues Search",
    description: "This app is for users to search for Github issues. User can search through a Github account and look at their projects, the app will show the user if the if the issues for that repository have been completed or not. The user can then make the choice to help or read on the repo's issue.",
    githubLink: "https://github.com/edm1001/git-it-done",
    liveLink: "https://edm1001.github.io/git-it-done/"
  },
  {
    image: PortGenerator ,
    title: "Portfolio Generator",
    description: "This app uses NodeJs to create a static html portfolio quick and easy! After installation of the software, the app will ask its user information to put on the portfolio. After answering the questions, the app will produce an index.html file with information requested by the app. **USER MUST CLONE THE APP FROM GITHUB FOR APP TO WORK",
    githubLink: "https://github.com/edm1001/node-portfolio-gen",
    liveLink: "Not Available"
  },
  {
    image: SalonSite,
    title: "Salon Website",
    description: " This app was for a local salon in Houston Texas. The app will show its users information about the salon and their services! Due to discontinuation of the app, it will not have a reservation function because it requires subscription",
    githubLink: "https://github.com/edm1001/vitalz-barbershop",
    liveLink: "https://edm1001.github.io/vitalz-barbershop/"
  },
  {
    image: TravelDiary,
    title: "Travel Blog",
    description: " This is a travel blog app that allows its users to search for destinations using city and country. When user finds a place, they will find information about the destination, such as popular restaurants and travel safety. This app allows users to register for an account to create a post. App users can also reviews from other users will appear, and can comment if user is logged in!",
    githubLink: "https://afternoon-harbor-62644.herokuapp.com/",
    liveLink: "https://github.com/strudelAndCoffee/travel-log-dashboard"
  },
  {
    image: DailyScheduler,
    title: "Daily Task Scheduler",
    description: " This app is for daily task scheduling. This app has a set time from 1AM to 5PM, once it passes the time the timeslot will turn red. The current timeslot also turns green, there's a save button on the right of the app that user can click to save the task they created on the local storage. They can then use the saved task for a different day or time.",
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