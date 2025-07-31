import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Photo from "../../Assets/photos/personal/clr-self.png";
import Container from "react-bootstrap/Container";

const Welcome = () => {
  return (
    <Container fluid className="welcome-section bg-dark">
      <Row className="w-100" id="home">
        {/* Text Column */}
        <Col lg={6} md={6} sm={12} xs={12}>
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: -25 }}
            className="welcome-img m-5"
          >
            <h1 className="fw-bold text-warning text-start  ps-2">
              Hello!
            </h1>{" "}
            <p className="text-white text-start ps-md-1 pt-1">
              {" "}
              Hi, I’m Edmer Valencia — a Full Stack Developer and Computer
              Science student at WGU. With a strong foundation from UT Austin’s
              coding bootcamp and hands-on experience in web development, I
              bring a mix of technical skill and real-world problem-solving to
              every project.
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
