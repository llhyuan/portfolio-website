import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './_Root.scss';
import { navContext } from './components/navContext';

import Navbar from './components/Navbar';
import Home from './components/Home';
import NewNavbar from './components/NewNavbar';

export default function Root() {
  const [navStatus, setNavStatus] = useState('nav_about');

  return (
    <div className='relative root z-10'>
      <navContext.Provider value={{ navStatus, setNavStatus }}>
        <div id='fadein' className='translate-x-0'>
          <Navbar />
          <Home />
        </div>
        <div className='fixed top w-full z-999'>
          <NewNavbar />
        </div>
      </navContext.Provider>
    </div>
  );
}
