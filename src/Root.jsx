import { useState } from 'react';
import './_Root.scss';
import {navContext} from './components/navContext';

import Navbar from './components/Navbar';
import Home from './components/Home';


export default function Root() {
  const [navStatus, setNavStatus] = useState('nav_about');

    return (
    <div className='root'>
      <navContext.Provider value={{ navStatus, setNavStatus }}>
        <Navbar />
        <Home />
      </navContext.Provider>
    </div>
  );
}
