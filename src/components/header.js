import React from "react";
import logo from "./TricksterLogo.png";

function Header() {  
  
    return(
    
      <div className="header3">
          <h1 className="header"><b>TRICKSTER</b></h1>
          <div className="flexImage">
            <img width="100" height="100" src={logo} alt="TricksterLogo"></img>
            <h3 className="header header2 "><b>GPA</b></h3>
            <img width="100" height="100" src={logo} alt="TricksterLogo"></img>
          </div>
          <h5 className="header"><b>CALCULATOR</b></h5>
      </div>
    )   
  }
  
  export default Header;