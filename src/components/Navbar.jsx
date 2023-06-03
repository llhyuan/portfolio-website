import { useEffect, useRef, useState } from 'react';
import '../scss/_Navbar.scss';
import { qualities } from '../assets/data/qualities';

import NavbarItem from './NavbarItem';

function Navbar() {
  const revealingContent = useRef();
  const [quality, setQuality] = useState(qualities[0]);

  function mouseEnterHandler(e) {
    e.target.children[1].classList.add('revealing');
  }
  function pointerDownHandler(e){
    console.log(e);

    e.currentTarget.children[1].classList.add('revealing');
  }

  function animationEndHandler(e) {
    e.target.classList.remove('revealing');
    let randomIndex = Math.random();
    setQuality(qualities[Math.floor(randomIndex * qualities.length)]);
  }

  useEffect(() => {
    let contentWidth = revealingContent.current.offsetWidth + 3;
    contentWidth = (contentWidth < 130 ? 130 : contentWidth);
    revealingContent.current.parentElement.style.setProperty(
      '--content-width',
      contentWidth + 'px'
    );
  }, [quality]);

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div
          className='group site-title relative bottom-[0.3rem] font-mono'
          onMouseEnter={mouseEnterHandler}
          onAnimationEnd={animationEndHandler}
          onPointerDown={pointerDownHandler}
        >
          <span className='text-[2rem] font-mono'>&lt;</span>
          <span className='relative inline-block bottom-[-0.7rem] overflow-hidden w-0 transition-all'>
            <span ref={revealingContent} className='text-[2rem] font-mono pr-1'>
              {quality}
            </span>
          </span>
          <span className='blinking text-transparent bg-[--text-primary]'>
            _
          </span>
          <span className='text-transparent'>_</span>
          <span className='text-[2rem] font-mono'>/</span>
          <span className='text-[2rem] font-mono'>&gt;</span>
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
