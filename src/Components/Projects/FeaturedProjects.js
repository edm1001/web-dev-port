import {useState} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image  from "react-bootstrap/Image";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Wordle from '../../Assets/port/wordle.gif';
import Chatterize from '../../Assets/port/chatterize.gif';
import TravelDiary from '../../Assets/port/travel-blog.gif';
import TripleJ from '../../Assets/port/triplej.gif';
import DailyScheduler from '../../Assets/port/daily-scheduler.gif';
import IssuesLookup from '../../Assets/port/git-issue-lookup.gif';
import PortGenerator from '../../Assets/port/portfolio=generator.gif';
import SalonSite from '../../Assets/port/salon-site.gif';
import Taskmaster from '../../Assets/port/task-master-pro.gif';
import Zookeepers from '../../Assets/port/zoo-inventory.gif'

import {AiFillGithub} from 'react-icons/ai';
import { FiExternalLink } from "react-icons/fi";


const FeaturedProjects = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);                                                                                                                                                                                                                                                       
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);                                                                                                                                                                                                                                                       
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);                                                                                                                                                                                                                                                       
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);                                                                                                                                                                                                                                                       
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);                                                                                                                                                                                                                                                       
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);                                                                                                                                                                                                                                                       
    const handleClose10 = () => setShow10(false);
    const handleShow10 = () => setShow10(true);                                                                                                                                                                                                                                                       
    
    return (
        <Row className=" d-flex justify-content-center py-5">
          
        <Col className="py-1" lg={3} md={4} sm={4} xs={6}>
          <Image  className='w-100 h-100 ftrd-img' src={Wordle} alt="" fluid onClick={handleShow}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={Chatterize} alt="" fluid onClick={handleShow2}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={Zookeepers} alt="" fluid onClick={handleShow3}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={TripleJ} alt="" fluid onClick={handleShow4}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6}>
          <Image  className='w-100 h-100 ftrd-img' src={Taskmaster} alt="" fluid onClick={handleShow5}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={IssuesLookup} alt="" fluid onClick={handleShow6}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={PortGenerator} alt="" fluid onClick={handleShow7}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={SalonSite} alt="" fluid onClick={handleShow8}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={TravelDiary} alt="" fluid onClick={handleShow9}></Image>
        </Col>
        <Col className="py-1" lg={3} md={4} sm={4} xs={6} >
          <Image  className='w-100 h-100 ftrd-img' src={DailyScheduler} alt="" fluid onClick={handleShow10}></Image>
        </Col>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Wordle Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is a clone of the popular game Wordle! <br/>
          In this project we use Javascript to recreate a word guessing game, We guess the five letter word by choosing a choice of letters and press enter. <br/>
          If the letter chosen by the user is correct and in position, the letter box will turn green. <br/>
          If the letter chosen is correct but in wrong position, it will turn orange. <br/>
          The wrong letters will remain black, and the user will have chances to guess the word right!
          Good Luck!

        </Modal.Body>
        <Modal.Footer>
        <a className='btn btn-outline-info' href="https://github.com/edm1001/wordle-clone"><AiFillGithub size={25} /></a>
        <a className='btn btn-outline-info' href="https://edm1001.github.io/wordle-clone/"><FiExternalLink size={25} /></a>
        <Button variant="outline-info" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
        <Modal.Title>Chatterize</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is messaging app for users that choose to talk about anything! <br/>
          This app was a group project and has an amazing messagging functions for its users to talk to one another. <br/>
          The app also has an option to sign up and log in, in order to chat with one another.

        </Modal.Body>
        <Modal.Footer>
        <a className='btn btn-outline-info' href="https://github.com/xJaimeGx/chatterize"><AiFillGithub size={25} /></a>
        <a className='btn btn-outline-info' href="https://chatterize123.herokuapp.com/"><FiExternalLink size={25} /></a>
        <Button variant="outline-info" onClick={handleClose2}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
        <Modal.Title>Zoo Inventory List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is a inventory app that lists the animals in the zoo! <br/>
          If user wants to find the animal lists, user can click on view animals and it will list all the animals with some info on that animal <br/>
          The user can also use the filter function to categorize and find a specific animal. <br/>
          The user can also find the zookeepers that tend to these animals!
        </Modal.Body>
        <Modal.Footer>
        <a className='btn btn-outline-info' href="https://github.com/edm1001/zookeepr"><AiFillGithub size={25} /></a>
        <a className='btn btn-outline-info' href="https://edm1001.github.io/zookeepr/"><FiExternalLink size={25} /></a>
        <Button variant="outline-info" onClick={handleClose3}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
        <Modal.Title>Triple J Wild Game Birds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is an online store I've partnered with a local company. <br/>
          This app shows its users the birds and products that the company offers to its customers<br/>
          The bird section will have a bit of info with the birds and the care for them. <br/>
          App will also have a contact form on the site for easy contact and have some info on the company.
        </Modal.Body>
        <Modal.Footer>
        <a className='btn btn-outline-info' href="www.triplejwildgamebirds.com"><FiExternalLink size={25} /></a>
        <Button variant="outline-info" onClick={handleClose4}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
        <Modal.Title>To Do List</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are reading this text in a modal5!</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose5}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>
      
        <Modal show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
        <Modal.Title>Git Issues Lookup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This app is for users to search for Github issues <br/>
          User can search through a Github account and look at their projects, the app will show the user if the if the issues for that repository have been completed or not. <br/> The user can then make the choice to help or read on the repo's issue.
        </Modal.Body>
        <Modal.Footer>
        <a className='btn btn-outline-info' href="https://github.com/edm1001/git-it-done"><AiFillGithub size={25} /></a>
        <a className='btn btn-outline-info' href="https://edm1001.github.io/git-it-done/"><FiExternalLink size={25} /></a>
        <Button variant="outline-info" onClick={handleClose6}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show7} onHide={handleClose7}>
        <Modal.Header closeButton>
        <Modal.Title>Portfolio Generator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This app uses NodeJs to create a static html portfolio quick and easy! <br/>
          After installation of the software, the app will ask its user information to put on the portfolio. <br/>
          After answering the questions, the app will produce an index.html file with information requested by the app. <br/>
          ** THE USER MUST CLONE THE APP FROM GITHUB FOR APP TO WORK
        </Modal.Body>
        <Modal.Footer>
        <a className='btn btn-outline-info' href="https://github.com/edm1001/node-portfolio-gen"><AiFillGithub size={25} /></a>
        <Button variant="outline-info" onClick={handleClose7}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show8} onHide={handleClose8}>
        <Modal.Header closeButton>
        <Modal.Title>Salon Website</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This app was for a local salon in Houston Texas. <br/>
          The app will show its users information about the salon and their services! <br/>
          Due to discontinuation of the app, it will not have a reservation function because it requires payment for working functionality.
          </Modal.Body>
        <Modal.Footer>
        <a className='btn btn-outline-info' href="https://github.com/edm1001/vitalz-barbershop"><AiFillGithub size={25} /></a>
        <a className='btn btn-outline-info' href="https://edm1001.github.io/vitalz-barbershop/"><FiExternalLink size={25} /></a>
        <Button variant="outline-info" onClick={handleClose8}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show9} onHide={handleClose9}>
       <Modal.Header closeButton>
        <Modal.Title>Travel Diary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is a travel blog app that allows its users to search for destinations using city and country. <br/>
          When user finds a place, they will find information about the destination, such as popular restaurants and travel safety. <br/>
          This app allows users to register for an account to create a post. <br/>
          App users can also reviews from other users will appear, and can comment if user is logged in! <br/>

        </Modal.Body>
        <Modal.Footer>
        <a className='btn btn-outline-info' href="https://afternoon-harbor-62644.herokuapp.com/"><AiFillGithub size={25} /></a>
        <a className='btn btn-outline-info' href="https://github.com/strudelAndCoffee/travel-log-dashboard"><FiExternalLink size={25} /></a>
        <Button variant="outline-info" onClick={handleClose9}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

        <Modal show={show10} onHide={handleClose10}>
        <Modal.Header closeButton>
        <Modal.Title>Daily Task Scheduler</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This app is for daily task scheduling <br/>
          This app has a set time from 1AM to 5PM, once it passes the time the timeslot will turn red. <br/>
          The current timeslot also turns green, there's a save button on the right of the app that user can click to save the task they created on the local storage. <br/> They can then use the saved task for a different day or time.
        </Modal.Body>
        <Modal.Footer>
        <a className='btn btn-outline-info' href="https://github.com/edm1001/i-like-tortoises-05"><AiFillGithub size={25} /></a>
        <a className='btn btn-outline-info' href="https://edm1001.github.io/i-like-tortoises-05/"><FiExternalLink size={25} /></a>
        <Button variant="outline-info" onClick={handleClose10}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>




    </Row>
    )
};
export default FeaturedProjects;