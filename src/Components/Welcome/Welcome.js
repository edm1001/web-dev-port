import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Photo from "../../Assets/photos/personal/clr-self.png";
import Container from "react-bootstrap/Container";

const Welcome = () => {
  return (
    <Container fluid className="welcome-section bg-dark" >
      <Row className="w-100" id="home">
        {/* Text Column */}
        <Col lg={6} md={6} sm={12} xs={12} className="text-center bg-dark">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: -25 }}
            className="welcome-img px-4 py-5"
          >
            <h1 className="fw-bold text-warning text-start ps-lg-5 ps-2">
              Hello!
            </h1>{" "}
            <p className="text-white text-start ps-md-1 pt-1">
              {" "}
              My name is Edmer Valencia, and I am a Full Stack Developer with a
              background in web development, having completed the coding
              bootcamp at the University of Texas at Austin.
            </p>
            <p className="text-white text-start ps-md-1 ">
              I am passionate about coding and eager to develop
              innovative software and projects.
            </p>
          </motion.div>
        </Col>

        {/* Image Column */}
        <Col
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className="bg-dark d-flex justify-content-center align-items-center pb-4 overflow-hidden"
        >
          {" "}
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 40 }}
            transition={{ delay: 1 }}
            className="welcome-box"
            style={{ maxWidth: "100%", width: "100%" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <Image
                src={Photo}
                id="personal-photo"
                className="img-fluid rounded-circle"
              />{" "}
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};
export default Welcome;
