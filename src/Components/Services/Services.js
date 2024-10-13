import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaBootstrap, FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { VscJson } from "react-icons/vsc";
import { DiNpm, DiNodejs, DiResponsive } from "react-icons/di";
import { AiOutlineHtml5, AiFillGithub, AiFillApi } from "react-icons/ai";
import {
  SiMongodb,
  SiExpress,
  SiHeroku,
  SiFramer,
  SiJquery,
  SiSequelize,
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const serviceCards = [
  {
    header: "DSA",
    title: "Data Structure & Algorithms",
    description:
      "My knowledge of DSA enables me to efficiently manage and analyze data through structured scripting and algorithmic processes.",
  },
  {
    header: "OOP",
    title: "Object Oriented Programming",
    description:
      "A popular paradigm to create easy to refractor sites using reusable code blocks and object-relational mapping.",
  },
  {
    header: "MVC",
    title: "Model View Controller",
    description:
      "A framework pattern for computer softwares that easilhy distinguish related program logic into model, view, and controller elements.",
  },
  {
    header: "PWA",
    title: "Progressive Web Application",
    description:
      "PWAs work on any platform with a compliant browser, offering a seamless user experience like native apps. They use service workers for offline access, push notifications, and enhanced performance.",
  },
  {
    header: "CSM",
    title: "Client-Server Model",
    description:
      "Experienced in the client-server model, I specialize in architecting networked applications for seamless communication. Whether optimizing web interactions or designing efficient distributed systems, my proficiency is crucial for crafting effective and responsive software solutions.",
  },
];

const techIcons = [
  { Component: AiOutlineHtml5, title: "HTML5" },
  { Component: IoLogoCss3, title: "CSS3" },
  { Component: IoLogoJavascript, title: "JavaScript" },
  { Component: FaBootstrap, title: "Bootstrap" },
  { Component: SiJquery, title: "JQuery" },
  { Component: FaReact, title: "React" },
  { Component: VscJson, title: "JSON" },
  { Component: DiNodejs, title: "NodeJS" },
  { Component: DiNpm, title: "NPM" },
  { Component: SiMongodb, title: "MongoDB" },
  { Component: SiExpress, title: "Express Router" },
  { Component: DiResponsive, title: "Responsive Media" },
  { Component: AiFillGithub, title: "GitHub" },
  { Component: BsFiletypeSql, title: "SQL" },
  { Component: AiFillApi, title: "APIs" },
  { Component: SiHeroku, title: "Heroku Cloud" },
  { Component: SiFramer, title: "Framer Motion" },
  { Component: FaWordpress, title: "WordPress" },
];

const ExpandableText = ({ children, descriptionLength }) => {
  const fullText = children;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p className="text">
      {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}...`}
      <span onClick={toggleText} className="toggle-button">
        {isExpanded ? "Show less" : "Show more"}
      </span>
    </p>
  );
};
const renderIcons = () => {
  return techIcons.map(({ Component, title }, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer mx-3 my-2"
    >
      <Component
        title={title}
        size={50}
        color="lightgrey"
        className="skl-logo"
      />
    </motion.div>
  ));
};

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % serviceCards.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => setCurrentSlide(next),
    autoplay: true,
    arrows: true,
  };

  return (
    <section className="services py-2" id="services">
      <Container className="h-100 w-100">
        <Row className="service-row" bg="dark" data-bs-theme="dark">
          <Col lg={6} md={12} sm={12}>
            <div className="">
              <h2 className="text-warning fw-bold"> Services</h2>
              <Row className="text-start fw-bold p-1 my-5 progress-row">
                <Col className="col-12 py-1 text-start">
                  <h6> Full Stack Development:</h6>
                  <ProgressBar
                    animated
                    variant="warning"
                    now={100}
                    className=""
                  />
                  <small className="text-muted">
                    MongoDB, Express Router, React, NodeJS, Git ...
                  </small>
                </Col>
                <Col className="col-12 py-1 text-start">
                  <h6>Front End Development:</h6>
                  <ProgressBar
                    animated
                    variant="warning"
                    now={100}
                    className=""
                  />
                  <small className="text-muted">
                    HTML5, CSS3, JavaScript, Bootstrap, Tailwind ...
                  </small>
                </Col>
                <Col className="col-12 py-1">
                  <h6>Back End Development:</h6>
                  <ProgressBar
                    animated
                    variant="warning"
                    now={100}
                    className=""
                  />
                  <small className="text-muted">
                    APIs, JSON, NodeJS, Express, NoSQL, SQL ...
                  </small>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={6} md={12} sm={12}>
            <Row className="my-3 mx-2">
              <Col lg={12} md={12} sm={12} xs={12} className="service-col">
                <Slider {...settings}>
                  {serviceCards.map((serviceCard, index) => (
                    <div key={index} className="slider-item">
                      <Card
                        className="w-100 h-100 mt-3 slider-card"
                        border="secondary"
                      >
                        <Card.Header className="service-header text-center align-center">
                          <h5>{serviceCard.header}</h5>
                        </Card.Header>
                        <Card.Body>
                          <Card.Title className="fw-small fs-6 text-warning">
                            {serviceCard.title}
                          </Card.Title>
                          <p>
                            <ExpandableText descriptionLength={150}>
                              {serviceCard.description}
                            </ExpandableText>
                          </p>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </Slider>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="tech-learned py-2">
          <h4 className="fs-2 text-warning fw-bold">My Stack</h4>
          <div className="d-flex flex-wrap justify-content-center">
            {renderIcons()}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Services;
