import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './_Root.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {navContext} from './components/navContext.js';


export default function Root() {
  const [navStatus, setNavStatus] = useState("about");

  return (
    <div className='root'>
      <navContext.Provider value={{ navStatus, setNavStatus }}>
        <Navbar />
        <Outlet />
        <Footer />
      </navContext.Provider>
    </div>
  );
}
