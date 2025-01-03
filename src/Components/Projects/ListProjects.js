import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineRead } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const listProjectData = [
  {
    title: "Book Shop",
    description:
      "A bookshop app that allows users to manage their book inventory by creating, deleting, and updating items.",
    githubLink: "https://github.com/edm1001/book-app",
    liveLink: " https://edm1001.github.io/book-app/",
    readmeLink: "https://github.com/edm1001/book-app/blob/main/README.md",
  },
  {
    title: "Wordle Game",
    description:
      "A Wordle clone where players guess a five-letter word, with correct and incorrect guesses highlighted visually",
    githubLink: "https://github.com/edm1001/wordle-clone",
    liveLink: "https://edm1001.github.io/wordle-clone/",
    readmeLink: "https://github.com/edm1001/wordle-clone/blob/main/README.md",
  },
  {
    title: "To Do List",
    description:
      "Organize tasks in sections like To-Do, In Progress, and Done with easy drag-and-drop functionality",
    githubLink: "https://github.com/edm1001/taskmaster-pro",
    liveLink: "https://edm1001.github.io/taskmaster-pro/",
    readmeLink: "https://github.com/edm1001/taskmaster-pro/blob/main/README.md",
  },
  {
    title: "Zoo Inventory List",
    description:
      "This app displays the zoo's animal collection with filtering and info on animals and their zookeepers.",
    githubLink: "https://github.com/edm1001/zookeepr",
    liveLink: "https://edm1001.github.io/zookeepr/",
    readmeLink: "https://github.com/edm1001/zookeepr/blob/main/README.md",
  },
  {
    title: "Daily Task Scheduler",
    description:
      "Schedule daily tasks with time slots from 1AM to 5PM, saving tasks locally for easy reuse.",
    githubLink: "https://github.com/edm1001/i-like-tortoises-05",
    liveLink: "https://edm1001.github.io/i-like-tortoises-05/",
    readmeLink:
      "https://github.com/edm1001/i-like-tortoises-05/blob/main/README.md",
  },
  {
    title: "Weather App",
    description:
      "An app that checks the weather for the week based on users location",
    githubLink: "https://github.com/edm1001/weather-checker",
    liveLink: "https://edm1001.github.io/weather-checker/",
    readmeLink:
      "https://github.com/edm1001/weather-checker/blob/main/README.md",
  },
  {
    title: "Blackjack",
    description: "Based a popular card game created using Vanilla JS",
    githubLink: "https://github.com/edm1001/blackjackgame",
    liveLink: "https://edm1001.github.io/blackjackgame/",
    readmeLink: "https://github.com/edm1001/blackjackgame/blob/main/README.md",
  },
  {
    title: "Currency Checker",
    description:
      "An app that allows users to check the currency and compare them with others around the world.",
    githubLink: "https://github.com/edm1001/Currency-Checker",
    liveLink: "https://edm1001.github.io/Currency-Checker/",
    readmeLink:
      "https://github.com/edm1001/Currency-Checker/blob/main/README.md",
  },
  {
    title: "Analog Clock",
    description:
      "A functional clock based on users current location using Javascript.",
    githubLink: "https://github.com/edm1001/js-clock",
    liveLink: "https://edm1001.github.io/js-clock/",
    readmeLink: "https://github.com/edm1001/js-clock/blob/main/README.md",
  },
  {
    title: "React Calculator",
    description: "A calculator app build using ReactJS",
    githubLink: "https://github.com/edm1001/react-calc",
    liveLink: "https://edm1001.github.io/react-calc/",
    readmeLink: "https://github.com/edm1001/react-calc/blob/main/README.md",
  },
  {
    title: "Counter App",
    description: "A integer counter app using Vanilla JS",
    githubLink: "https://github.com/edm1001/online-counter",
    liveLink: "https://edm1001.github.io/online-counter/",
    readmeLink: "https://github.com/edm1001/online-counter/blob/main/README.md",
  },
  {
    title: "Read-Me Generator",
    description:
      "A backend app that generates a read me file for repositories.",
    githubLink: "https://github.com/edm1001/read-me-generator",
    liveLink: "https://edm1001.github.io/read-me-generator/",
    readmeLink:
      "https://github.com/edm1001/read-me-generator/blob/main/README.md",
  },
  {
    title: "Employee Tracker",
    description:
      "A backend app that allows tracking of employees in a workspace with CRUD functions using SQL. *User must clone repo to use",
    githubLink: "https://github.com/edm1001/e.tracker.12",
    readmeLink: "https://github.com/edm1001/e.tracker.12/blob/main/README.md",
  },
  {
    title: "Regex Tutorial",
    description: "A regex tutorial on how to make easy validations in an app.",
    githubLink: "https://github.com/edm1001/Regex-tutorial-peach",
    readmeLink:
      "https://github.com/edm1001/Regex-tutorial-peach/blob/main/README.md",
  },
];

const ListProjects = () => {
  return (
    <Container>
      <Card bg="light">
        <Card.Header as="h5">More Projects:</Card.Header>
        <Card.Body>
          <ListGroup bg="light">
            {listProjectData.map((project, index) => (
              <ListGroup.Item
                as="li"
                key={index}
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <h6 className="fw-bold">{project.title}</h6>
                  {project.description}
                </div>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="btn btn-outline-secondary mx-1"
                  >
                    <FiExternalLink />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="btn btn-outline-secondary mx-1"
                  >
                    <FiGithub />
                  </a>
                )}
                {project.readmeLink && (
                  <a
                    href={project.readmeLink}
                    className="btn btn-outline-secondary mx-1"
                  >
                    <AiOutlineRead />
                  </a>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ListProjects;
