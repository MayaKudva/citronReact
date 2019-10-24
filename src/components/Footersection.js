import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


    function Footersection() {
        return (
            <div>
                <footer className="container-fluid  footerContainer fiveREMtopMargin" style={{width:"100%"}}>

                    <div className="row footerContent1 oneEMtopMargin ">

                        <div className="col-md-4 ">
                            <div className="commonFooterContainer subscribeButton">
                                <label className="commonfooterLabel"> Subscribe to know more</label>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="searchHotelsByContry">
                                <label className="commonfooterLabel"> Search hotels by contry</label>
                            </div>
                        </div>

        

                        </div>

                        <div className="row footerContent2 ">
                            <div className="col-md-6 d-flex row wrap specificFooterContainer">
                                <div className="col-md-4 hotelsByCityName autoMargin">
                                    <label className="commonfooterLabel" style={{fontSize:"1em"}}>Hotels By City:</label>
                                    <ul>
                                        <li>Hotels In Bangalore</li>
                                        <li>Hotels In Mysore</li>
                                        <li>Hotels In Bangok</li>
                                        <li>Hotels In Saudi Arebia</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 holidaysByDestinations " >
                                    <label className="commonfooterLabel" style={{fontSize:"1em"}}>Holidays By destination:</label>
                                    <ul >
                                        <li >Hotels In Bangalore</li>
                                        <li>Hotels In Mysore</li>
                                        <li>Hotels In Bangok</li>
                                        <li>Hotels In Saudi Arebia</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 flightsByCity "  >
                                    <label className="commonfooterLabel" style={{fontSize:"1em"}}>Flights By City:</label>
                                    <ul>
                                        <li>Hotels In Bangalore</li>
                                        <li>Hotels In Mysore</li>
                                        <li>Hotels In Bangok</li>
                                        <li>Hotels In Saudi Arebia</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2 specificFooterContainer">

                            </div>
                            <div className="col-md-3 specificFooterContainer">
                                <div className="citronAddress">
                                    <label className="commonfooterLabel">Address:</label>
                                    <ul>

                                        <li>Citron Travels International Limited</li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row footerContent3  " >
                            <div className="col-md-5">
                                <div className="termsOfservice commonFooterContainer" style={{marginLeft: "0"}} >

                                    <label className="termsLabel"> Terms Of Service</label>
                                    <label className="termsLabel"> Privacy Policy</label>
                                    <label className="termsLabel"> About Us</label>
                                    <label className="termsLabel"> FAQ</label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="copyright">

                                </div>
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>


</footer>
            
        </div>
                )
            }
export default Footersection;