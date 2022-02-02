import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
        <div className="fooContainer">
        
            <p>&copy; Copyright 2022</p>
            <div className="socialIcons">
            <FontAwesomeIcon icon={faFacebookSquare} size="3x" className='smIcon'/>
            <FontAwesomeIcon icon={faTwitterSquare} size="3x" className='smIcon'/>
            <FontAwesomeIcon icon={faLinkedin } size="3x" className='smIcon'/>
            </div>
        </div>

    </footer>

  );
};

export default Footer;