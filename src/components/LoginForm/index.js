import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    axios
      .post('/user', {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="email-box">
          <input
            type="email"
            name=""
            required=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Email</label>
        </div>
        <div className="email-box">
          <input
            type="password"
            name=""
            required=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label>Password</label>
        </div>
        <a href="#" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}

export default LoginForm;
