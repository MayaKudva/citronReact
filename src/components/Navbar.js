import React from 'react'

function Navbar() {
    return (
        <div>
<header>
            <nav className="navbar navbar-expand-lg navbar-light  alignMiddle">
                <a className="navbar-brand" href="#">Citron Travels</a>
            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"  >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
      
              
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02" style={{marginTop:'0'}}>
                    <ul className="navbar-nav">
                        <li className="nav-item autoMargin">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item autoMargin">
                            <a className="nav-link" href="#">Flights</a>
                        </li>
                        <li className="nav-item autoMargin">
                            <a className="nav-link " href="#" >Hotels</a>
                        </li>
                        <li className="nav-item autoMargin">
                            <a className="nav-link " href="#" >Holidays</a>
                        </li>
                        <li className="nav-item autoMargin">
                            <a className="nav-link " href="#" >Activies</a>
                        </li>
                    </ul>
                </div>
                <ul className="signInUp navbar-nav" style={{right:'5rem !important'}}>
                <li className="nav-item ">
                            <a className="nav-link" href="#" style={{width:'5rem',display:'inline-block'}}>Sign-In</a>
                        </li>
                        <li className="nav-item " >
                            <a className="nav-link" href="#" style={{width:'5rem',display:'inline-block'}}>Sign-Up</a>
                        </li>
                </ul>


            </nav>

            </header>
        </div>
    )
}
export default Navbar;