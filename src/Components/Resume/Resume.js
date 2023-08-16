import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import {Document, Page, pdfjs} from 'react-pdf';
import resumePdf from '../../Assets/resume/officialresume-efv.pdf';
pdfjs.GlobalWorkerOptions.workerSrc= `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(false);

    return (
        <>
        <Button onClick={handleShow}variant="outline-secondary" >Resume</Button>

        <Modal
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered 
  show={show}>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
      My Resume
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Document
        file={resumePdf}
        onLoadError={console.error}
    >
    <Page pageIndex={0}></Page>
    <Page pageIndex={1}></Page>
    </Document>

  </Modal.Body>
  <Modal.Footer>
    <Button onClick={handleClose}>Close</Button>
  </Modal.Footer>
</Modal>
        </>
    )
}

export default Resume;