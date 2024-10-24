import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import AboutPic from "../../Assets/photos/personcoding.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="abt-info">
          <Col lg={6} md={5} sm={12} xs={12} className="">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, animationDelay: 2 }}
            >
              <div className="about-img text-center">
                <img
                  alt="about-pic"
                  src={AboutPic}
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </motion.div>
          </Col>

          <Col className="p-4" lg={6} md={7} sm={12} xs={12}>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
              }}
            >
              <h4 className="fw-semibold text-dark fs-3 text-center text-md-start">
                About Me
              </h4>
              <div className="about-msg">
                <p className="px-2  m-2  text-start" id="abt-msg">
                  I’m passionate about web development, blending creativity with
                  purpose. My experience in retail, freelancing, and coding
                  bootcamp has sharpened my collaboration skills, and I’m
                  committed to continuous learning. I’m eager to make an
                  impact and contribute to your company’s success.
                </p>
              </div>

              <Row className="about-badge my-3 text-black">
                <Col className="text-start ps-4">
                  <p id="abt-msg">
                    <Badge bg="success">Ethnicity :</Badge> Filipino <br />
                    <Badge bg="success">Birthday :</Badge> October 1, 1998{" "}
                    <br />
                    <Badge bg="success">Age :</Badge> 26 <br />
                  </p>
                </Col>
                <Col className="text-start pe-5" id="abt-msg">
                  <p id="abt-msg">
                    <Badge bg="success">Birthplace :</Badge> Iloilo City,
                    Philippines <br />
                    <Badge bg="success">School :</Badge> Coding bootcamp at UT
                    Austin <br />
                    <Badge bg="success">Loves :</Badge> Tech, Nature, & Music{" "}
                    <br />
                  </p>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
