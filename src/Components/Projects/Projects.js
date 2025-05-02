import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import Wordle from "../../Assets/port/wordle.gif";
import PortGenerator from "../../Assets/port/portfolio=generator.gif";
import Chatterize from "../../Assets/port/chatterize.gif";
import GitIssue from "../../Assets/port/git-issue-lookup.gif";
import DailyScheduler from "../../Assets/port/daily-scheduler.gif";
import TripleJ from "../../Assets/port/triplej.gif";
import ZooKeepr from "../../Assets/port/zoo-inventory.gif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjSlider = [
  {
    image: Wordle,
  },
  {
    image: Chatterize,
  },
  {
    image: PortGenerator,
  },
  {
    image: GitIssue,
  },
  {
    image: TripleJ,
  },
  {
    image: ZooKeepr,
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % ProjSlider.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => setCurrentSlide(next),
    autoplay: true,
  };

  const rotateVariant = {
    resting: {
      rotate: 0,
    },
    hovering: {
      rotate: 225,
      scale: 1.2,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <section>
      <h2 className=" text-center fw-bold fs-1 pt-5"> My Projects</h2>
      <Container className="project">
        <Row className="project-row">
          <Col className="p-2">
            <Slider {...settings}>
              {ProjSlider.map((item, index) => (
                <motion.div
                  variants={rotateVariant}
                  initial="resting"
                  whileHover="hovering"
                >
                  <Link to="/portfolio">
                    <Image
                      key={index}
                      className="proj-img"
                      src={item.image}
                    ></Image>
                  </Link>
                </motion.div>
              ))}
            </Slider>
          </Col>
        </Row>
        <motion.div
          whileHover={{ scale: 1.3, x: 0 }}
          className="pb-5 text-center"
        >
          <Button
            variant="outline-dark"
            size="lg"
            className="see-btn"
            href="/portfolio"
          >
            {" "}
            See More!{" "}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};
export default Projects;
