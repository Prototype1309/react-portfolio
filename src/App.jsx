import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';

function App() {
  return (
    < div className='App'>
      <Intro />
      <Contact />
      <Portfolio />
      <Timeline />
      <Footer />
    </div>
  )
}



export default App