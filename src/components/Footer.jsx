// Footer.jsx

import React from 'react'


const Footer = () => {

  return (
    <>
    

    <footer className='footerSection'>

      <div className="footerContainer">

        {/* Logo Section */}

        <div className="footerBox">

          <h2>Shopping Mall</h2>

          <p>
            Your one-stop destination for fashion,
            beauty, and lifestyle products.
          </p>

        </div>


        {/* Quick Links */}

        <div className="footerBox">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Beauty</li>
            <li>Contact</li>
          </ul>

        </div>


        {/* Customer Service */}

        <div className="footerBox">

          <h3>Customer Service</h3>

          <ul>
            <li>Help Center</li>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping Info</li>
          </ul>

        </div>


        {/* Contact */}

        <div className="footerBox">

          <h3>Contact Us</h3>

          <p>Email: shoppingmall@gmail.com</p>

          <p>Phone: +91 9876543210</p>

          <p>Location: Hyderabad, India</p>

        </div>

      </div>


      {/* Bottom Footer */}

      <div className="footerBottom">

        <p>
          © 2026 Shopping Mall. All Rights Reserved.
        </p>

      </div>

    </footer>
    </>
  )
}

export default Footer