import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFillPersonFill} from 'react-icons/bs'

const Reviews =() => {
    return (
        <section className='reviews' id='reviews'>
            <h2 className=''>Reviews</h2>
            <Container>

            <Row className='reviews-row'>
            
                <Col lg={3} md={4} sm={6}>
            <Card>
            <BsFillPersonFill size={35} />
            <Card.Body>
             <p>
                Hi Edmer, <br/>
                Your Regex tutorial on email validation is clean and readable! You were able to explain the purpose and the proper usage of this complex feature! <br/>
                You were able to provide a clear explanation of the underlying regex topics.  Great job including detailed sections that corresponded to important components in the starter code that make up the regex features. You were able to embed code snippets for each underlying example you used! <br/>

                You created a unique GitHub gist that provided all the necessary markdown needed for a comprehensive tutorial! You were able to show your work with descriptive commits. Well done!<br/>

                Overall strong effort, keep up the awesome work!
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

                <Col lg={3} md={4} sm={6}>
            <Card>
             <BsFillPersonFill size={35} /> 
            <Card.Body>
             <p>
             Congratulations on finishing project 2! Yall are over 2/3 done with the course and can now call yourselves full stack developers! Your project fulfilled all the requirements while still being responsive and polished. I am seriously impressed with the outcome you were able to achieve in only 2 weeks! <br/>
            I love the flow and layout of the information presented. Everything is easy to find at a glance, and the presentation is very polished and pleasing to the eye. Additionally, all the backend routes seem to be working properly! <br/>
            Additionally, it seems that all the backend routes are working as intended and all the images are loading properly! Great job using Multer and getting all the backend routes to work.
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
                
             <Col lg={3} md={4} sm={6}>
            <Card>
            <BsFillPersonFill size={35} />
            <Card.Body>
            <p> Great job here! Your video was concise and demonstrates your app asking the user questions about the readme's content (title, description, installation, usage, license, contributing, tests, email, and github), generating a readme with corresponding sections that matched your input, included a questions section at the end with your email and github info, and had a working table of contents that linked to each section<br/>
            The rest looks good and works properly; good work! - Central Grader, NL

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

                <Col lg={3} md={4} sm={6}>
            <Card>
            <BsFillPersonFill size={35} />
            <Card.Body>
            <p> Edmer Franciz, <br/>
            Great job with this assignment!<br/>
            Video walkthrough demonstrates all of the prompts receiving user input.<br/>
            Video walkthrough demonstrates a generated HTML file.<br/>
            Video walkthrough demonstrates invoking the application from the command line.<br/>
            Video walkthrough demonstrates all 4 tests passing.<br/>
            Application utilizes Employee, Manager, Engineer and Intern classes.<br/>
            Uses the inquirer package.<br/>
            Uses the Jest package.<br/>
            Very nice work!!</p>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col>- Grader Coding</Col>
                <Col>May 2022</Col>
                </Row>
            </Card.Footer>
            </Card>
                </Col>

            <Col lg={4} md={4} sm={6}>
            <Card>
            <BsFillPersonFill size={35} />
            <Card.Body>
            <p> Great job here. The heroku link you gave led to a "Application error" page, but I tested things locally and can confirm that everything worked properly.<br/>
            The user is able to add and subtract funds, those changes are saved to the database, and if they are done offline, changes are saved locally and added to the database once connection is re-established.<br/>
            Aside from the deployment, the rest looks good. Best of luck and good work! </p>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col>- Central Grader, NL</Col>
                <Col>June 2022</Col>
                </Row>
            </Card.Footer>
            </Card>
                </Col>

                <Col lg={4} md={4} sm={6}>
            <Card>
            <BsFillPersonFill size={35} />
            <Card.Body>
            <p>Thank you for submitting your assignment Edmer! <br/> I was able to clone and run the application. The application utilizes React on the front end, and the routes are handled by Express.<br/>
            I was able to search for a book. The application returns a collection of books. The application shows the title, author, description, image field, however, it is missing the link field for the books that are returned from the search. You also are utilizing the React Router package.<br/>
             Overall good start to this application!</p>
            </Card.Body>
            <Card.Footer>
                <Row>
                <Col>- Central Grader KD</Col>
                <Col>June 2022</Col>
                </Row>
            </Card.Footer>
            </Card>
                </Col>
            
                <Col lg={4} md={4} sm={6}>
            <Card>
            <BsFillPersonFill size={35} />
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
            </Row>
            </Container>
        </section>
    )
}
export default Reviews;