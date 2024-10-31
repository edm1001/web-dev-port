import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeaturedProjects from "../Components/Projects/FeaturedProjects";
import ListProjects from "../Components/Projects/ListProjects";
import Contact from "../Components/Contact/Contact";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="portfolio bg-light">
      <Container className="portfolio mb-5">
        <h1 className="mt-3 p-5 text-warning align-center text-center fw-bold fs-1">
          Projects Page
        </h1>
        <Row
          as="div"
          className="mt-5 d-flex align-items-center justify-content-center"
        >
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="d-flex justify-content-center"
          >
            <motion.h4
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary fs-3 text-center pt-3"
            >
              Link to my Github:
            </motion.h4>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="text-center d-flex justify-content-center"
          >
            <motion.div
              whileHover={{
                scale: 1.3,
                x: 0,
              }}
            >
              <a
                className="text-success cursor-pointer"
                href="https://github.com/edm1001?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={70} />
              </a>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <FeaturedProjects />
        </Row>
        <Row>
          <ListProjects />
        </Row>
      </Container>
      <Contact />
    </section>
  );
};

export default Portfolio;
