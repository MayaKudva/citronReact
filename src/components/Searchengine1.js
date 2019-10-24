import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import flightSVG from '../images/icons/plane.svg';
import hotelSVG from '../images/icons/hotel.svg';
import holidaySVG from '../images/icons/sunset.svg';
import activitySVG from '../images/icons/bicycle-rider.svg';
import carSVG from '../images/icons/frontal-taxi-cab.svg';


function Searchengine() {
    return (
        <div className="searchEngine2  zeromMargin zeroPadding" style={{ height: "auto" }}>


            <Container className=" mediaWidth100" style={{ height: "auto", width: "95%" }} fluid={true}>


                <Row className="firstrow" style={{ height: "auto" }} >
                    <Col style={{ height: "inherit" }} md={2} xs={6} className="alignMiddle">
                        <div className="searchIcon alignMiddle ">
                            <img src={flightSVG} alt="SearcH Flights" height="50" width="50" />
                            <label style={{ marginLeft: "1em", fontSize: "1.5em" }}>Flights</label>
                        </div>

                    </Col>
                    <Col style={{ height: "5rem" }} md={2} xs={6} className="alignMiddle">
                        <div className="searchIcon alignMiddle ">
                            <img src={hotelSVG} alt="SearcH Flights" height="50" width="50" />
                            <label style={{ marginLeft: "1em", fontSize: "1.5em" }}>Hotels</label>
                        </div>
                    </Col>
                    <Col style={{ height: "5rem" }} md={2} xs={6} className="alignMiddle">
                        <div className="searchIcon alignMiddle ">
                            <img src={holidaySVG} alt="SearcH Flights" height="50" width="50" />
                            <label style={{ marginLeft: "1em", fontSize: "1.5em" }}>Holidays</label>
                        </div>
                    </Col>
                    <Col style={{ height: "5rem" }} md={2} xs={6} className="alignMiddle"
                    ><div className="searchIcon alignMiddle ">
                            <img src={activitySVG} alt="SearcH Flights" height="50" width="50" />
                            <label style={{ marginLeft: "1em", fontSize: "1.5em" }}>Activities</label>
                        </div>
                    </Col>
                    <Col style={{ height: "5rem" }} md={2} xs={6} className="alignMiddle">
                        <div className="searchIcon alignMiddle " style={{ width: "100%" }}>
                            <img src={carSVG} alt="SearcH Flights" height="50" width="50" />
                            <label style={{ marginLeft: "1em", fontSize: "1.5em" }}>Car Rental</label>
                        </div>
                    </Col>
                </Row>
                <Row className="secondrow " style={{ marginTop: "0.8em" }}>
                    <Col style={{ height: "2em" }} className="alignMiddle">
                        <div class="form-check-inline">
                            <label class="form-check-label" style={{ fontSize: "1em" }}>
                                <input type="radio" class="form-check-input" name="oneWay" />One Way
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label" style={{ fontSize: "1em" }}>
                                <input type="radio" class="form-check-input" name="twoWay" checked />Two way
                            </label>
                        </div>
                        <div class="form-check-inline disabled">
                            <label class="form-check-label" style={{ fontSize: "1em" }}>
                                <input type="radio" class="form-check-input" name="multipleStops"  />Multiple stops
                            </label>
                        </div>
                    </Col>
                </Row>
                <Row     >
                    <Col style={{ height: "5rem", border: "1px solid red" }} md={3} xs={6}>From City</Col>
                    <Col style={{ height: "5rem", border: "1px solid red" }} md={3} xs={6}>To city</Col>
                    <Col style={{ height: "5rem", border: "1px solid red" }} md={2} xs={6}>Date</Col>
                    <Col style={{ height: "5rem", border: "1px solid red" }} md={2} xs={6}>Return Date</Col>
                    <Col style={{ height: "5rem", border: "1px solid red" }} md={2} xs={6}>Travellers</Col>
                    <Col style={{ height: "5rem", border: "1px solid red", margin: "auto" }} md={6} xs={6}>Search button</Col>
                </Row>
            </Container>

        </div >
    );
};
export default Searchengine;
