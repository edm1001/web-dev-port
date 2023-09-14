import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFillPersonFill} from 'react-icons/bs'

// Createa reusable Read More/Less component
const ExpandableText = ({ children, descriptionLength }) => {
    const fullText = children;
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <p className='text'>
        {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}...`}
        <span onClick={toggleText} className='toggle-button'>
          {isExpanded ? 'Show less' : 'Show more'}
        </span>
      </p>
    );
  };
  


const Reviews =() => {
    return (
        <section className='reviews' id='reviews'>
            <h2 className='d-flex justify-content-center text-white py-4'>Reviews</h2>
            <Container>

            <Row className='d-flex justify-content-center reviews-row'>
            <Col className=' py-2' lg={3} md={4} sm={6}>
            <Card className='review-card text-white' bg='dark' border='secondary' >
            <i className='reviews-icon py-1'><BsFillPersonFill size={35} /> </i>
            <Card.Body>
             <p>
             <ExpandableText descriptionLength={150}>
                Hi Edmer,
                Your Regex tutorial on email validation is clean and readable! You were able to explain the purpose and the proper usage of this complex feature! 
                You were able to provide a clear explanation of the underlying regex topics.  Great job including detailed sections that corresponded to important components in the starter code that make up the regex features. You were able to embed code snippets for each underlying example you used! 
                You created a unique GitHub gist that provided all the necessary markdown needed for a comprehensive tutorial! You were able to show your work with descriptive commits. Well done!
                Overall strong effort, keep up the awesome work!
             </ExpandableText>
            </p>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col>- Central Grader, DG</Col>
                <Col>April 2022</Col>
                </Row>
            </Card.Footer>
            </Card>
                </Col>

            <Col className=' py-2' lg={3} md={4} sm={6}>
            <Card className='review-card text-white' bg='dark' border='secondary' >
            <i className='reviews-icon py-1'> <BsFillPersonFill size={35} /> </i>
            <Card.Body>
             <p>
            <ExpandableText descriptionLength={150}>
             Congratulations on finishing project 2! Yall are over 2/3 done with the course and can now call yourselves full stack developers! Your project fulfilled all the requirements while still being responsive and polished. I am seriously impressed with the outcome you were able to achieve in only 2 weeks!
            I love the flow and layout of the information presented. Everything is easy to find at a glance, and the presentation is very polished and pleasing to the eye. Additionally, all the backend routes seem to be working properly!
            Additionally, it seems that all the backend routes are working as intended and all the images are loading properly! Great job using Multer and getting all the backend routes to work.
            </ExpandableText> 
            </p>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col>- Zach Yarbough</Col>
                <Col>April 2022</Col>
                </Row>
            </Card.Footer>
            </Card>
                </Col>
                
             <Col className=' py-2' lg={3} md={4} sm={6}>
             <Card className='review-card text-white' bg='dark' border='secondary' >
            <i className='reviews-icon py-1'> <BsFillPersonFill size={35} /></i>
            <Card.Body>
            <p>
                <ExpandableText descriptionLength={150}>
                 Great job here! Your video was concise and demonstrates your app asking the user questions about the readme's content (title, description, installation, usage, license, contributing, tests, email, and github), generating a readme with corresponding sections that matched your input, included a questions section at the end with your email and github info, and had a working table of contents that linked to each section. The rest looks good and works properly; good work!
                </ExpandableText>
            </p>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col>- Central Grader, NL</Col>
                <Col>May 2022</Col>
                </Row>
            </Card.Footer>
            </Card>
                </Col>

            <Col className=' py-2' lg={3} md={4} sm={6}>
            <Card className='review-card text-white' bg='dark' border='secondary' >
            <i className='reviews-icon py-1'> <BsFillPersonFill size={35} /></i>
            <Card.Body>
            <p> 
            <ExpandableText descriptionLength={150}>
                Edmer Franciz, 
                Great job with this assignment! 
                Video walkthrough demonstrates all of the prompts receiving user input. 
                Video walkthrough demonstrates a generated HTML file. 
                Video walkthrough demonstrates invoking the application from the command line. 
                Video walkthrough demonstrates all 4 tests passing. 
                Application utilizes Employee, Manager, Engineer and Intern classes. 
                Uses the inquirer package. 
                Uses the Jest package. 
                Very nice work!!
                </ExpandableText>
            </p>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col>- Grader Coding</Col>
                <Col>May 2022</Col>
                </Row>
            </Card.Footer>
            </Card>
                </Col>

            <Col className=' py-2' lg={3} md={4} sm={6}>
            <Card className='review-card text-white' bg='dark' border='secondary' >
            <i className='reviews-icon py-1'> <BsFillPersonFill size={35} /></i>
            <Card.Body>
            <p>
            <ExpandableText descriptionLength={150}>
                 Great job here. The heroku link you gave led to a "Application error" page, but tested things locally and can confirm that everything worked properly.
                The user is able to add and subtract funds, those changes are saved to the database, and if they are done offline, changes are saved locally and added to the database once connection is re-established.
                Aside from the deployment, the rest looks good. Best of luck and good work! 
                </ExpandableText>
                </p>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col>- Central Grader, NL</Col>
                <Col>June 2022</Col>
                </Row>
            </Card.Footer>
            </Card>
                </Col>

            <Col className=' py-2' lg={3} md={4} sm={6}>
            <Card className='review-card text-white' bg='dark' border='secondary' >
            <i className='reviews-icon py-1'> <BsFillPersonFill size={35}/></i>
            <Card.Body>
            <p>
            <ExpandableText descriptionLength={150}>
            I was able to search for a book. The application returns a collection of books. The application shows the title, author, description, image field, however, it is missing the link field for the books that are returned from the search. You also are utilizing the React Router package. Overall good start to this application!
            </ExpandableText>
             </p>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col>- Central Grader KD</Col>
                <Col>June 2022</Col>
                </Row>
            </Card.Footer>
            </Card>
                </Col>
            
            <Col className=' py-2' lg={3} md={4} sm={6}>
            <Card className='review-card text-white' bg='dark' border='secondary' >
            <i className='reviews-icon py-1'> <BsFillPersonFill size={35} /></i>
            <Card.Body>
            <p> All MVP requirements were exceeded. Very Impressive and Congratulations! You deserve this grade!</p>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col>- Walter Perry</Col>
                <Col>June 2022</Col>
                </Row>
            </Card.Footer>
            </Card>
                </Col>
            {/*Thank you for submitting your assignment Edmer! <br/> I was able to clone and run the application. The application utilizes React on the front end, and the routes are handled by Express.<br/> */}

            </Row>
            </Container>
        </section>
    )
}
export default Reviews;