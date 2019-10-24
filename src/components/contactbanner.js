import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 function contactbanner() {
    return (
        <div>
            <Container className="oneEMtopMargin zeroPadding"   style={{height:"auto", border: "1px solid red",width:"100%"}} fluid={true}>
                 <Row>
                     <Col className="alignMiddle " style={{height:"5rem", border: "1px solid red",width:"100%"}}>
                     <h3 className="autoMargin" >
                        Contact Us.............
                     </h3>
                     </Col>
                 </Row>
              
             </Container>
        </div>
    )
}
export default contactbanner;