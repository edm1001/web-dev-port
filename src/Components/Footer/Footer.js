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
                <a href='+12344'>Phone:</a><br/>
                <a href='/'>Spring, Texas</a><br/>
                <a href='/'>aaa</a>
                </div>
                </Col>
                <Col className='ftr-col2'>
                    <Dropdown>
                    <Dropdown.Toggle className='ftr-dropdown'
                    variant='outline-light'
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