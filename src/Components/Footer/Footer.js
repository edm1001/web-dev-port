import {Row, Col,Dropdown} from 'react-bootstrap';
const Footer = () => {
    return (
        
            <Row
            className='footer'
            style={{textAlign:'center'}}
            >
               <Col>
                <div>
                Copyright by Edmer Valencia &copy; <br/>
                <a href=''>Phone:</a><br/>
                <a>Location</a><br/>
                <a>aaa</a>
                </div>
                </Col>
                <Col className='ftr-col2'>
                    <Dropdown>
                    <Dropdown.Toggle className='ftr-dropdown'
                    variant='secondary'
                    >See More</Dropdown.Toggle>
                    <Dropdown.Menu> 
                    <Dropdown.Item>My Resume</Dropdown.Item>
                    <Dropdown.Item>Contact</Dropdown.Item>
                    <Dropdown.Item>Services</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        
    )
}
export default Footer;