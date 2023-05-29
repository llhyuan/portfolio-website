import { useContext, useEffect, useRef, useState } from 'react';
import '../scss/_Navbar.scss';
import { qualities } from '../assets/data/qualities';

import { navContext } from './navContext';

function Navbar() {
  const { navStatus, setNavStatus } = useContext(navContext);
  const revealingContent = useRef();
  const [quality, setQuality] = useState(qualities[0]);

  function clickHandler(e) {
    setNavStatus(e.target.id);
  }

  function mouseEnterHandler(e) {
    e.target.firstElementChild.classList.add('revealing');
  }

  function animationEndHandler(e) {
    e.target.classList.remove('revealing');
    let randomIndex = Math.random();
    setQuality(qualities[Math.floor(randomIndex * qualities.length)]);
  }

  useEffect(() => {
    let contentWidth = String(revealingContent.current.offsetWidth + 5);
    revealingContent.current.parentElement.style.setProperty(
      '--content-width',
      contentWidth + 'px'
    );
  }, [quality]);

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div
          className='group site-title'
          onMouseEnter={mouseEnterHandler}
          onAnimationEnd={animationEndHandler}
        >
          &lt;
          <span className='relative inline-block bottom-[-0.6rem] overflow-hidden w-0 transition-all'>
            <span ref={revealingContent} className='text-[2rem]'>
    {quality} 
            </span>
          </span>
          <span className='blinking text-transparent bg-[--text-primary]'>
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
