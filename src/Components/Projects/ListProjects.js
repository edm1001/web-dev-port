import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineRead } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const listProjectData = [
    {
        title: "Blog App",
        description: "A blog platform where users can sign up, create, update, delete posts, and upload files for enhanced content.",
        githubLink: "https://github.com/edm1001/mern-blog",
        liveLink: "https://edm1001.github.io/mern-blog/"
      },
      {
        title: "Book Shop",
        description: "A bookshop app that allows users to manage their book inventory by creating, deleting, and updating items.",
        githubLink: "https://github.com/edm1001/book-app",
        liveLink: " https://edm1001.github.io/book-app/"
      },
        {
        title: "Wordle Game",
        description: "A Wordle clone where players guess a five-letter word, with correct and incorrect guesses highlighted visually",
        githubLink: "https://github.com/edm1001/wordle-clone",
        liveLink: "https://edm1001.github.io/wordle-clone/",
      },
        {
        title: "To Do List",
        description: "Organize tasks in sections like To-Do, In Progress, and Done with easy drag-and-drop functionality",
        githubLink: "https://github.com/edm1001/taskmaster-pro",
        liveLink: "https://edm1001.github.io/taskmaster-pro/"
      },
        {
        title: "Daily Task Scheduler",
        description: "Schedule daily tasks with time slots from 1AM to 5PM, saving tasks locally for easy reuse.",
        githubLink: "https://github.com/edm1001/i-like-tortoises-05",
        liveLink: "https://edm1001.github.io/i-like-tortoises-05/"
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
    description: "Based a popular card game creted using Vanilla JS",
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
];

const ListProjects = () => {
  return (
    <Card bg="light">
      <Card.Header as="h5"> More Projects: </Card.Header>
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
              <a
                href={project.liveLink}
                className="btn btn-outline-secondary mx-1"
              >
                <FiExternalLink />
              </a>
              <a
                href={project.githubLink}
                className="btn btn-outline-secondary mx-1"
              >
                {" "}
                <FiGithub />
              </a>
              <a
                href={project.readmeLink}
                className="btn btn-outline-secondary mx-1"
              >
                <AiOutlineRead />
              </a>
            </ListGroup.Item>
          ))}

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <h6 className="fw-bold">Read-Me Generator</h6>
              A backend app that generates a read me file for repositories.
              <br /> *User must clone repo to use
            </div>
            <a
              href="https://github.com/edm1001/read-me-gen22"
              className="btn btn-outline-secondary mx-1"
            >
              {" "}
              <FiGithub />
            </a>
            <a
              href="https://github.com/edm1001/read-me-gen22/blob/main/README.md"
              className="btn btn-outline-secondary mx-1"
            >
              <AiOutlineRead />
            </a>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <h6 className="fw-bold">Employee Tracker</h6>
              A backend app that allows tracking of employees in a workspace
              with CRUD functions using SQL.
              <br /> *User must clone repo to use
            </div>
            <a
              href="https://github.com/edm1001/e.tracker.12"
              className="btn btn-outline-secondary mx-1"
            >
              {" "}
              <FiGithub />
            </a>
            <a
              href="https://github.com/edm1001/e.tracker.12/blob/main/README.md"
              className="btn btn-outline-secondary mx-1"
            >
              <AiOutlineRead />
            </a>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <h6 className="fw-bold">RPG Battle Game</h6>
              A backend turn based battle game using Node and jest! <br /> *User
              must clone repo to use
            </div>
            <a
              href="https://github.com/edm1001/jest-rpg-game"
              className="btn btn-outline-secondary mx-1"
            >
              {" "}
              <FiGithub />
            </a>
            <a
              href="https://github.com/edm1001/jest-rpg-game/blob/main/README.md"
              className="btn btn-outline-secondary mx-1"
            >
              <AiOutlineRead />
            </a>
          </ListGroup.Item>

          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <h6 className="fw-bold">Regex Tutorial</h6>A regex tutorial on how
              to make easy validations in an app.
            </div>
            <a
              href="https://github.com/edm1001/Regex-tutorial-peach"
              className="btn btn-outline-secondary mx-1"
            >
              {" "}
              <FiGithub />
            </a>
            <a
              href="https://github.com/edm1001/Regex-tutorial-peach/blob/main/README.md"
              className="btn btn-outline-secondary mx-1"
            >
              <AiOutlineRead />
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ListProjects;
