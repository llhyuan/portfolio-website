import { useContext } from 'react';
import '../scss/_Navbar.scss';

import { navContext } from './navContext.js';

function Navbar() {
  const { navStatus, setNavStatus } = useContext(navContext);

  function clickHandler(e) {
    console.log('click event fired.');
    setNavStatus(e.target.id);
  }

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='site-title'>
          &lt;
          <span className='animated text-transparent bg-[--text-primary]'>
            _
          </span>
          <span className='text-transparent'>_</span>/&gt;
        </div>
        <nav className='links non-mobile'>
          <a
            className={(navStatus == 'nav_about' ? 'active ' : '') + 'link'}
            href='#about'
            id='nav_about'
            onClick={clickHandler}
          >
            &quot;About&quot;
          </a>
          <a
            className={(navStatus == 'nav_projects' ? 'active ' : '') + 'link'}
            href='#projects'
            id='nav_projects'
            onClick={clickHandler}
          >
            &quot;Projects&quot;
          </a>
          <a
            className={
              (navStatus == 'nav_experience' ? 'active ' : '') + 'link'
            }
            href='#experience'
            id='nav_experience'
            onClick={clickHandler}
          >
            &quot;Experience&quot;
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
