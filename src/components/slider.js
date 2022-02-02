import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

    

function Slider() {
  return (
    <section className='SliderContainer'>
        <div className="container">
            <div className="TxtArea">
                <h3>Something About React</h3>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>

            </div>
            <div className="ImagesArea">
                <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=570&q=80" alt="" />
            </div>
        </div>
        <div className="BtnDown">
                <button> <FontAwesomeIcon icon={faCaretDown} /></button>
                
            </div>
    </section>

  );
}

export default Slider;
