import React, { useEffect, useRef, useState } from 'react'
import Narbar from './components/Narbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'

const App = () => {
  
   const [theme, setTheme] = useState(localStorage.getItem('theme') ? 
   localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
        <Toaster/>
        <Narbar theme={theme} setTheme={setTheme}/>
        <Hero/>
        <TrustedBy/>
        <Services/>
        <OurWork/>
        <Teams/>
        <ContactUs/>
        <Footer theme={theme}/>

    </div>
  )
}

export default App

