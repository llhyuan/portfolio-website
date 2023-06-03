import { useEffect, useRef, useState } from 'react';
import '../scss/_Navbar.scss';
import { qualities } from '../assets/data/qualities';

import NavbarItem from './NavbarItem';

function Navbar() {
  const revealingContent = useRef();
  const [quality, setQuality] = useState(qualities[0]);


  function mouseEnterHandler(e) {
    e.target.firstElementChild.classList.add('revealing');
  }

  function animationEndHandler(e) {
    e.target.classList.remove('revealing');
    let randomIndex = Math.random();
    setQuality(qualities[Math.floor(randomIndex * qualities.length)]);
  }

  useEffect(() => {
    console.log(revealingContent.current);
    console.log(revealingContent.current.offsetWidth);
    let contentWidth = String(revealingContent.current.offsetWidth + 3);
    console.log(contentWidth);
    revealingContent.current.parentElement.style.setProperty(
      '--content-width',
      contentWidth + 'px'
    );
  }, [quality]);

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div
          className='group site-title relative bottom-[0.3rem]'
          onMouseEnter={mouseEnterHandler}
          onAnimationEnd={animationEndHandler}
        >
          &lt;
          <span className='relative inline-block bottom-[-0.6rem] overflow-hidden w-0 transition-all'>
            <span ref={revealingContent} className='text-[2rem] pr-1'>
              {quality}
            </span>
          </span>
          <span className='blinking text-transparent bg-[--text-primary]'>
            _
          </span>
          <span className='text-transparent'>_</span>/&gt;
        </div>
        <nav className='links non-mobile'>
          <NavbarItem tag={'About'} />
          <NavbarItem tag={'Projects'} />
          <NavbarItem tag={'Experience'} />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
