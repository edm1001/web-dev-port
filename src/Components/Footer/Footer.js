import {Row, Col,Dropdown} from 'react-bootstrap';
const Footer = () => {
    return (
        
            <Row
            className=' footer'
            >
               <Col  className='px-4'>
                <div className='ftr-col1'>
                Copyright by Edmer Valencia &copy; <br/>
                <a href='/'>Location: Spring, Texas</a><br/>
                <a href='/'>Email: edmerfranciz@gmail.com</a>
                </div>
                </Col>

                <Col className='ftr-col2 text-end'>
                    <Dropdown variant='dark'>
                    <Dropdown.Toggle className='ftr-dropdown'
                    variant='outline-light'
                    >See More</Dropdown.Toggle>
                    <Dropdown.Menu> 
                    <Dropdown.Item  href='/ResumePdf'>Resume</Dropdown.Item>
                    <Dropdown.Item href='/#contact'>Contact</Dropdown.Item>
                    <Dropdown.Item href='/portfolio'>Projects</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        
    )
}
export default Footer;