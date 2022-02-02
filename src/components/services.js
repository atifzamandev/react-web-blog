import React from 'react';
import Button from './button';

function Services() {
  return (
    <section className='SevciesBoxes'>
        <h2 className='HeadingTwo'>OUR SERVICES</h2>
        <div className="Container">
            
            <div className="Box">
                <h3>TITLE HERE</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id tempora, soluta nemo odit rem! Laudantium accusamus obcaecati provident quibusdam laborum nemo.</p>
                <Button title = 'Learn More' />
            </div>
            <div className="Box">
                <h3>TITLE HERE</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id tempora, soluta nemo odit rem! Laudantium accusamus obcaecati provident quibusdam laborum nemo.</p>
                <Button title = 'Learn More' />
            </div>
            <div className="Box">
                <h3>TITLE HERE</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id tempora, soluta nemo odit rem! Laudantium accusamus obcaecati provident quibusdam laborum nemo.</p>
                <Button title = 'Learn More' />
            </div>
            
        </div>
    </section>


  );
}

export default Services;

