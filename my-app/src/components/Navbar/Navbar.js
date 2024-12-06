import React from "react";
import "./Navbar.css"; 
import avatarImage from "./image.png"; 
 


const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        
        <div className="navbar-left">
          <span className="logo">
            <i className="icon">👜</i> Explorin Solutions
          </span>
        </div>

        
        <div className="navbar-center">
          <label className="checkbox-container">
            <input type="checkbox" className="checkbox" />
            <span className="checkbox-label">My Saved Jobs only</span>
          </label>
        </div>

      
        <div className="navbar-right">
          <i className="emoji">🔔</i>
          <div className="avatar">
            <img
              src={avatarImage}
              alt="User Avatar"
            />
          </div>
        </div>
      </nav>

     
     
      
    </header>  
  );
};

export default Navbar;
