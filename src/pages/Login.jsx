// Login.jsx

import React from 'react'
const Login = () => {

  return (

    <div className='loginSection'>

      <div className="loginBox">

        <h2>Login</h2>

        <form>

          <input
            type="email"
            placeholder='Enter Email'
          />

          <input
            type="password"
            placeholder='Enter Password'
          />

          <button type='submit'>
            Login
          </button>

        </form>

        <p>
          Don't have an account?
          <span> Signup</span>
        </p>

      </div>

    </div>

  )
}

export default Login