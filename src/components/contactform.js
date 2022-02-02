import React from 'react';

function ContactForm() {
  return (
      <section className='contctContainer'>
        <form className='contact-form'>
            <div className="form-control">
                <label>Full Name:</label>
                <input type="text" placeholder='Full Name...' />
            </div>

            <div className="form-control">
                <label>Email:</label>
                <input type="email" placeholder='example@domain.com' />
            </div>
            <div className="form-control">
                <label>Message:</label>
                <textarea cols="40" rows="10"></textarea>
            </div>
            <button className='btn-form' type="submit">Send Message</button>    
        </form>
    </section>
  );
}

export default ContactForm;
