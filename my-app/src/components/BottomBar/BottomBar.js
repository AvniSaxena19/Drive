import React from 'react';
import './BottomBar.css';

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <p>© 2024 Explorin. All rights Reserved</p>
      <div className="social-icons">
      <span className="logo">
            <i className="icon"></i> 
          </span>
        <a href="#youtube" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#instagram" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#twitter" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default BottomBar;


<div className="navbar-left">
          <span className="logo">
            <i className="icon">👜</i> Explorin Solutions
          </span>
        </div>