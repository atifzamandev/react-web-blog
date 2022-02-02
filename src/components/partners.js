import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGitSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faSnapchatSquare } from "@fortawesome/free-brands-svg-icons";




function Partners() {
  return (
  <section className='partnersBox'>
        <ul className='partContainer'>
          {/* <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li> */}

          <li><FontAwesomeIcon icon={faFacebookSquare} size="5x" className='fbIcon'/></li>
          <li><FontAwesomeIcon icon={faTwitterSquare} size="5x" className='twIcon'/></li>
          <li><FontAwesomeIcon icon={faLinkedin } size="5x" className='linIcon'/></li>
          <li><FontAwesomeIcon icon={faGitSquare} size="5x" className='gitIcon'/></li>
          <li><FontAwesomeIcon icon={faYoutube} size="5x" className='ytIcon'/></li>
          <li><FontAwesomeIcon icon={faInstagramSquare} size="5x" className='isIcon'/></li>
          <li><FontAwesomeIcon icon={faSnapchatSquare} size="5x" className='ssIcon'/></li>
        </ul>
      </section>
  
  );
}

export default Partners;
