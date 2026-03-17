import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <div className="loginsignup-fields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email ID" />
          <input type="password" placeholder="Password" />
        </div>

        <button>Continue</button>

        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, you agree to the Terms & Conditions</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup
