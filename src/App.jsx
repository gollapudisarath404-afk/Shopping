import React, { useState } from 'react'
import './App.css'
import './Global.css'
import Navbar from './components/Navbar'
import { BoysBanner, LadiesBanner } from './components/Banner'

import Footer from './components/Footer'
import { Gents, Ladies } from './data'


const App = () => {

  const [gentsFashion] = useState(Gents)

  const [ladiesFashion] = useState(Ladies)

  return (
    <>
    <div>

      <Navbar/>

      <BoysBanner />

    
    <div className='collectionSection'>

      <h2>{gentsFashion.title}</h2>

      <div className="images">

        {gentsFashion.products.map((item, index) => (

          <div className="card" key={index}>

            <img src={item.image} alt="" />

            <p>{item.price}</p>

          </div>

        ))}

      </div>

    </div>
      
      <LadiesBanner />

       
    <div className='collectionSection'>

      <h2>{ladiesFashion.title}</h2>

      <div className="images">

        {ladiesFashion.products.map((item, index) => (

          <div className="card" key={index}>

            <img src={item.image} alt="" />

            <p>{item.price}</p>

          </div>

        ))}

      </div>

    </div>

      <Footer />

    </div>
    </>

  )
}

export default App