import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 function Activityslides() {
    return (
        <div>
               <Container className="oneEMtopMargin zeroPadding"   style={{height:"auto", border: "1px solid red",width:"100%"}} fluid={true}>
                 <Row>
                     <Col className="alignMiddle " style={{height:"5rem", border: "1px solid red",width:"100%"}}>
                     <h3 className="autoMargin" >
                         Our Activity Packages
                     </h3>
                     </Col>
                 </Row>
                 <Row className="autoMargin mediaWidth100" style={{width:"95%"}}>
                 <Col className="alignMiddle " style={{height:"10rem", border: "1px solid red",width:"100%"}}></Col>
                 <Col className="alignMiddle " style={{height:"10rem", border: "1px solid red",width:"100%"}}></Col>
                 <Col className="alignMiddle " style={{height:"10rem", border: "1px solid red",width:"100%"}}></Col>
                 </Row>
                
             </Container>
        </div>
    )
}
export default Activityslides;