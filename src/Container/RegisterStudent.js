import React, { useState } from 'react';

function RegisterStudent() {
  const [student, setStudent] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student registered:', student);
    // Here you can add code to send the student data to a backend or perform other actions
  };

  return (
    <div>
      <h2>Register New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={student.name} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={student.email}  onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterStudent;
