
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'

import FeaturedProjects from "../Components/Projects/FeaturedProjects";
import ListProjects from '../Components/Projects/ListProjects';

const Portfolio = () => {
 
    return (
        // have a list under the featured proj for "other projects"
        // the projects have a live link, github link, link to the readme
        <section className="portfolio">
        <h1 className='text-center' id=''>Projects Page</h1>
        <Container className="portfolio">
        <Row><FeaturedProjects/></Row>
        <Row><ListProjects/></Row>
        </Container>
        
        </section>
    )
}

export default Portfolio;