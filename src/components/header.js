import React from "react";
import logo from "./TricksterLogo.png";

function Header() {  
  
    return(
    
      <div className="header3">
      <h1 className="header"><b>TRICKSTER</b></h1>
      <h3 className="header header2 "><b>GPA</b></h3>
      <h5 className="header"><b>CALCULATOR</b></h5>
      <div>
      <img className="header4" src={logo} alt="TricksterLogo"></img>
      </div>
      </div>
    )   
  }
  
  export default Header;