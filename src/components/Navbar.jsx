import React from 'react'


const Navbar = () => {

  return (

    <div className='headerSection'>

      <div className="left">

        <div className="title">
          <h2>Shopping Mall</h2>
        </div>

      </div>


      <div className="center">

        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>

      </div>


      <div className="search">

        <input type="text" placeholder="search..." />

      </div>


      <div className="right">

        <div className="signin">

         

            <button>
              Signin / Signup
            </button>


        </div>


        <div className="cart">
          Cart
        </div>

      </div>

    </div>
  )
}

export default Navbar