import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clayful from 'clayful/client-js';

/**
 * 회원가입 페이지 함수
 */
function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); //아이디 혹은 이메일
  const [password, setPassword] = useState(""); //최소 8자

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //자동으로 리프레쉬되는걸 막아줌
    var Customer = clayful.Customer;

    var payload = {
        email,
        password,
    };
    console.log('payload',payload);
    
    Customer.createMe(payload, function(err, result) {
    
        if (err) {
            // Error case
            console.log(err.code);
            return;
        }
    
        navigate("/login");
    
    });
  };
  
  return (
    <div className='pageWrapper'>
    <div className="auth-wrapper">
      <h1>회원가입.</h1>
      <form onSubmit={handleSubmit}> 
        <input
        onChange={handleEmailChange}
        placeholder="Apple ID"
        type="email"
        name="email"
        value={email}
        />
        <input onChange={handlePasswordChange}
        placeholder="암호"
        type="password"
        name="password"
        value={password}/>

        <button type="submit">회원가입.</button>
        <Link to="login" style={{ color:"gray", textDecoration: "none" }}>
          {" "}
          이미 Apple ID가 있다면? 지금 로그인.</Link>
      </form>
    </div>
    </div>
  )
}

export default RegisterPage;