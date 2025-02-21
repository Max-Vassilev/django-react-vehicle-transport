import React from 'react';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <a href="http://localhost:3000/login/" className="button login">Login</a>
      <a href="http://localhost:3000/register/" className="button register">Register</a>
      <a href="http://localhost:3000/logout/" className="button logout">Logout</a>
    </div>
  );
}

export default Buttons;