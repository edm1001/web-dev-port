import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import {Document, Page, pdfjs} from 'react-pdf';
import resumePdf from '../../Assets/resume/officialresume-efv.pdf';
pdfjs.GlobalWorkerOptions.workerSrc= `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const Resume = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id="resume">
        <Button onClick={handleShow}variant="outline-secondary" >Resume</Button>

        <Modal
  show={show}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered 
  onHide={handleClose}
  >
  <Modal.Header onClick={handleClose} closeButton >
    <Modal.Title id="contained-modal-title-vcenter">
      My Resume
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Document
        file={resumePdf}
        >
    <Page pageNumber={0} ></Page>
    <Page pageNumber={1} ></Page>
    <Page pageNumber={2} ></Page>
  
    </Document>
  </Modal.Body>
</Modal>
        </div>
    )
}

export default Resume;