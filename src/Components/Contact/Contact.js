import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Row, Col, Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { GiTexas } from "react-icons/gi";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "personal_contact",
        "contact_service",
        form.current,
        "wLYbtp8s7HHiOK8mX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const scaleVariant = {
    resting: {
      scale: 1,
    },
    hovering: {
      scale: 1.5,
      opacity: 0.6,
    },
  };

  return (
    <section className="contact" id="contact">
      <h2 style={{ textAlign: "center" }}>Contact me through my Website</h2>
      <div className="contact-row">
        <Row className="contact">
          <Col lg={6} md={6} sm={12}>
            <motion.div initial={{ opacity: 0.1 }} whileInView={{ opacity: 1 }}>
              <div className="contact-info">
                {/* create a link like below but with a github logo */}
                <motion.div
                  variants={scaleVariant}
                  initial="resting"
                  whileHover="hovering"
                >
                  <a href="https://www.linkedin.com/in/edmer-valencia-080414227/">
                    <FaGithubAlt color="black" size={30} />
                  </a>
                </motion.div>{" "}
                <motion.div
                  variants={scaleVariant}
                  initial="resting"
                  whileHover="hovering"
                >
                  <a href="https://www.linkedin.com/in/edmer-valencia-080414227/">
                    <FaLinkedin color="darkblue" size={30} />
                  </a>
                </motion.div>
                <motion.div
                  variants={scaleVariant}
                  initial="resting"
                  whileHover="hovering"
                >
                  <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-menu-homepage&_ga=2.32972793.659603090.1698012374-1692506508.1662130429">
                    <SiIndeed className="mt-1" color="darkblue" size={30} />
                  </a>
                </motion.div>
                <motion.div
                  variants={scaleVariant}
                  initial="resting"
                  whileHover="hovering"
                >
                  <a href="mailto:edmerfranciz@gmail.com">
                    <FcGoogle size={30} className="my-1" />
                  </a>
                </motion.div>
                <motion.div
                  variants={scaleVariant}
                  initial="resting"
                  whileHover="hovering"
                >
                  <p className="fw-semibold ps-2">
                    Spring, TX <GiTexas size={20} color="darkorange" />
                  </p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Button
                    className="my-1"
                    href="/ResumePdf"
                    variant="outline-dark"
                  >
                    Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Col>

          <Col className="mb-3 contact-form" lg={6} md={6} sm={12}>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              whileTap={{ scale: 1.2 }}
            >
              <Form ref={form} onSubmit={sendEmail} className="p-5 message">
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        as="input"
                        required
                        name="user_name"
                        type="name"
                        placeholder="Enter Name"
                      ></Form.Control>
                    </Col>
                    <Col>
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="subject"
                        name="subject"
                        placeholder="Subject here"
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    as="input"
                  ></Form.Control>

                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    name="message"
                    as="textarea"
                    rows={4}
                    placeholder="Write your message here"
                  ></Form.Control>
                </Form.Group>
                <motion.div
                  whileHover={{ scale: 1.2, x: 35 }}
                  whileTap={{ x: 200, opacity: 0.3, transition: 1.5 }}
                >
                  <Button
                    type="submit"
                    className="my-2"
                    variant="secondary"
                    value="Send"
                  >
                    {" "}
                    Submit
                  </Button>
                </motion.div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
