import {useState} from 'react';
import { navContext } from './components/navContext';

import Navbar from './components/Navbar';
import Home from './components/Home';
import LandingAnimation from './components/LandingAnimation';

export default function Root() {
  const [navStatus, setNavStatus] = useState('nav_about');

  return (
    <div className='relative flex flex-col min-h-[100vh] bg-[--bg-color] z-10'>
      <navContext.Provider value={{ navStatus, setNavStatus }}>
        <div  className='translate-x-0'>
          <Navbar />
          <Home />
        </div>
        <div className='fixed top w-full z-999'>
          <LandingAnimation />
        </div>
      </navContext.Provider>
    </div>
  );
}
