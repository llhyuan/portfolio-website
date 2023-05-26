import { useState } from 'react';
import './_Root.scss';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { navContext } from './components/navContext.js';

export default function Root() {
  const [navStatus, setNavStatus] = useState('about');

  return (
    <div className='root'>
      <navContext.Provider value={{ navStatus, setNavStatus }}>
        <Navbar />
        <Home />
        <Footer />
      </navContext.Provider>
    </div>
  );
}
