import { useState } from 'react';
import '../scss/_Navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='site-title'>&lt;Hangyuan_Liu /&gt;</div>
        {menuStatus ? (
          <FontAwesomeIcon
            className='mobile close-button'
            icon={faXmark}
            onClick={() => setMenuStatus(!menuStatus)}
          />
        ) : (
          <FontAwesomeIcon
            className='mobile open-button'
            icon={faBars}
            onClick={() => setMenuStatus(!menuStatus)}
          />
        )}
        {menuStatus ? (
          <nav className='mobile links'>
            <a className='link' href='#'>
              &quot;Projects&quot;
            </a>
            <a className='link' href='#'>
              &quot;Resume&quot;
            </a>
            <a className='link' href='#'>
              &quot;About&quot;
            </a>
          </nav>
        ) : (
          <></>
        )}
        <nav className='links non-mobile'>
          <a className='link' href='#'>
            &quot;Projects&quot;
          </a>
          <a className='link' href='#'>
            &quot;Resume&quot;
          </a>
          <a className='link' href='#'>
            &quot;About&quot;
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
