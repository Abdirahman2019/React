// Contact.js
import React from 'react';
class Contact extends React.Component{
  render(){
    return(
      <div className="form">
        <h2>Contact Us</h2>
        <form className='ui main'>
          <div className='field'>
            <label>Name</label>
            <input type='text' name='name' placeholder='Your Name'></input>
          </div>
          <div className='field'>
            <label>Email</label>
            <input type='text' name='email' placeholder='Email'></input>
          </div>
          <div className='field'>
            <label>Message:</label>
            <input type='text' name='email' placeholder='Write your message here'></input>
          </div>
          <input type="submit" value="save"></input>
        </form>
      </div>
    );
  }
}

export default Contact;