import React from 'react'
import './AddNumber.css';

class AddNumber extends React.Component {
    render(){
  return (
    <div className='form'>
        <h2>STUDENT INFO:</h2>
        
     <div>
      <label for="fname">First Name: </label>
       <input type='text' name='name' placeholder='First Name'></input>
       </div>
       <div>
      <label for="lname" >Last Name:</label>
       <input type='text' name='name' placeholder='Last Name'></input>
        </div>
        <div>
      <label >Password:</label>
       <input type='password' name='name' placeholder='password'></input>
        </div>
        <div>
      <label >Email No:</label>
       <input type='text' name='name' placeholder='Email'></input>
        </div>
        <div>
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="Kenya">Kenya</option>
      <option value="Uganda">Uganda</option>
      <option value="Tanzania">Tanzania</option>
    </select>
        </div>
        <input type="submit" value="Add Data"></input>
        
      </div>

  );
};
}

export default AddNumber;
