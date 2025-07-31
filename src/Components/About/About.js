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
              <div className="about-msg mt-2">
                <p className="px-2  m-2  text-start" id="abt-msg">
                  I'm a web developer with a passion for building clean,
                  purposeful experiences. My background in retail, freelancing,
                  and a coding bootcamp helped me develop strong teamwork and
                  problem-solving skills. I'm currently working toward a BS in
                  Computer Science at WGU and always looking to grow and make a
                  meaningful impact.
                </p>
              </div>

              <Row className="about-badge my-3 text-black">
                <Col className="text-start ps-4">
                  <p id="abt-msg">
                    <Badge bg="primary">Birthday :</Badge> October 1, 1998{" "}
                    <br />
                    <Badge bg="primary">Age :</Badge> 26 <br />
                  </p>
                </Col>
                <Col className="text-start pe-5" id="abt-msg">
                  <p id="abt-msg">
                    <Badge bg="primary">Birthplace :</Badge> Iloilo City,
                    Philippines <br />
                    <Badge bg="primary">School :</Badge> Coding bootcamp at UT
                    Austin <br />
                    <Badge bg="primary">Loves :</Badge> Tech, Nature, & Music{" "}
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
