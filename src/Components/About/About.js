import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import AboutPic from "../../Assets/photos/personcoding.png";
import { motion } from "framer-motion";

const About = () => {
return (
  <section className="about py-5" id="about">
    <Container>
      <Row className="abt-info align-items-center">
        {/* Image Column */}
        <Col lg={6} md={5} sm={12} className="mb-4 mb-md-0">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="about-img text-center">
              <img
                alt="Edmer Valencia"
                src={AboutPic}
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </motion.div>
        </Col>

        {/* Info Column */}
        <Col lg={6} md={7} sm={12}>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="fw-bold text-dark fs-3 text-center text-md-start mb-3">
              About Me
            </h4>
            <p className="text-start fs-6 lh-base">
              I’m a <strong>Full Stack Developer </strong>
              and current Computer Science student at WGU. I got my start
              through UT Austin’s coding bootcamp, and since then I’ve been
              building meaningful web experiences while continuing to grow as a
              developer. When I’m not coding, you’ll probably find me fishing
              along the Texas Gulf, spending time outdoors. I’m also into a wide
              range of music—anything from country to 80s rock. I bring
              curiosity, focus, and creativity to every project I work on and
              hope to find an opportunity tp grow both personally and
              professionally.
            </p>

            {/* Badge Info */}
            <Row className="about-badge mt-4">
              <Col xs={12} sm={6} className="mb-3">
                <div className="d-flex flex-column gap-2">
                  <div>
                    <span className="badge bg-primary fs-6 py-1 px-2 me-2">Birthday</span>
                    <span className="text-muted">Oct 1, 1998</span>
                  </div>
                  <div>
                    <span className="badge bg-primary fs-6 py-1 px-2 me-2">Age</span>
                    <span className="text-muted">26</span>
                  </div>
                  <div>
                    <span className="badge bg-primary fs-6 py-1 px-2 me-2">Birthplace</span>
                    <span className="text-muted">Iloilo City, Philippines</span>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="d-flex flex-column gap-2">
                  <div>
                    <span className="badge bg-primary fs-6 py-1 px-2 me-2">Education</span>
                    <span className="text-muted">UT Austin Bootcamp, WGU CS</span>
                  </div>
                  <div>
                    <span className="badge bg-primary fs-6 py-1 px-2 me-2">Interests</span>
                    <span className="text-muted">Tech, Nature, Music</span>
                  </div>
                </div>
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
