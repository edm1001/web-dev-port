
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'

import FeaturedProjects from "../Components/Projects/FeaturedProjects";
import ListProjects from '../Components/Projects/ListProjects';
import Contact from '../Components/Contact/Contact'
const Portfolio = () => {
 
    return (
        // have a list under the featured proj for "other projects"
        // the projects have a live link, github link, link to the readme
        <section className="portfolio">
        <Container className="portfolio">
        <h1 className='mt-3 text-warning text-center fw-bold'>Projects Page</h1>
        <Row><FeaturedProjects/></Row>
        <Row><ListProjects/></Row>
        <Row><Contact/></Row>
        </Container>
        
        </section>
    )
}

export default Portfolio;