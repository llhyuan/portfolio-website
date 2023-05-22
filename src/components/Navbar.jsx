import { useContext } from 'react';
import '../scss/_Navbar.scss';

import {navContext} from './navContext.js';

function Navbar() {

  const {navStatus, setNavStatus} = useContext(navContext);

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='site-title'>&lt;<span className='animated text-transparent bg-[--text-primary]'>_</span><span className='text-transparent'>_</span>/&gt;</div>
        <nav className='links non-mobile'>
    <a className={(navStatus == "about" ? 'active ' : '') + 'link'} href='#' id="about" onClick={(e)=>{
      setNavStatus(e.target.id);
    }}>
            &quot;About&quot;
          </a>
          <a className={(navStatus == "projects" ? 'active ' : '') + 'link'} href='#' id="projects" onClick={(e)=>{
      setNavStatus(e.target.id);
    }}>
            &quot;Projects&quot;
          </a>
          <a className={(navStatus == "resume" ? 'active ' : '') + 'link'} href='#' id="resume" onClick={(e)=>{
      setNavStatus(e.target.id);
    }}>
            &quot;Resume&quot;
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
