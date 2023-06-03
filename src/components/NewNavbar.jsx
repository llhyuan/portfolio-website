import { useRef, useEffect } from 'react';
import { gsap, Back, SteppedEase } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {CustomEase} from 'gsap/CustomEase';

export default function NewNavbar() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CustomEase);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();

      tl.fromTo(
        '#slash',
        {
          scale: '25',
          rotate: '-26deg',
          opacity: '0',
          duration: '0.3',
        },
        {
          scale: '1',
          rotate: '-26deg',
          opacity: '1',
          ease: CustomEase.create('custom', '0.64,0.5,0.91,0.56'),
        }
      );
      tl.from('#left', { translateX: '20vw', opacity: '0', duration: '0.3', delay: '0.1' });
      tl.from(
        '#right',
        {
          translateX: '-20vw',
          opacity: '0',
          duration: '0.3',
        },
        '<'
      );
      tl.from('#cursor', {
        width: '0',
        duration: '0.5',
        delay: '0.15',
        ease: Back.easeOut.config(4),
      });
      tl.to(
        '#slash',
        {
          rotate: '0',
          duration: '0.3',
        },
        '<'
      );
      tl.to('#cursor', {
        backgroundColor: 'transparent',
        repeat: '-1',
        duration: '0.9',
        ease: SteppedEase.config(1),
      });
      tl.to(
        '#logo',
        {
          height: '0',
          display: 'none',
          delay: '1'       },
        '<'
      );
      tl.to(
        '.group',
        {
          scale: '0.01',
          opacity: '0',
          translateX: '-40vw',
        },
        '<'
      );
    }, containerRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className='overflow-hidden'>
      <div
        id='logo'
        className='h-[100vh] flex justify-center items-center bg-[--bg-color-nav]'
      >
        <div className='group flex'>
          <p id='left' className='text-[30vw] text-[--text-primary] font-mono'>
            &lt;
          </p>
          <p id='quality' className='text-[30vw] mr-1'></p>
          <p
            id='cursor'
            className='text-[21vw] bg-[--text-primary] scale-y-[0.55] text-transparent'
          >
            _
          </p>
          <p id='space' className='text-[21vw] text-transparent'>
            _
          </p>
          <p id='slash' className='text-[30vw] text-[--text-primary] font-mono'>
            /
          </p>
          <p id='right' className='text-[30vw] text-[--text-primary] font-mono'>
            &gt;
          </p>
        </div>
      </div>
    </div>
  );
}
