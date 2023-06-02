import { useRef, useEffect } from 'react';
import { gsap, Back } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Landing() {
  gsap.registerPlugin(ScrollTrigger);
  const aniContextRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();

      tl.fromTo(
        '.slash',
        {
          scale: '40',
          rotate: '-20deg',
          opacity: '0.3',
          duration: '0.5',
        },
        {
          scale: '1',
          rotate: '-20deg',
          opacity: '1',
        }
      );
      tl.from('.left', { translateX: '10rem', opacity: '0', duration: '0.3' });
      tl.from(
        '.right',
        {
          translateX: '-10rem',
          opacity: '0',
          duration: '0.3',
        },
        '<'
      );
      tl.from('.cursor', {
        width: '0',
        duration: '0.2',
        ease: Back.easeOut.config(3),
      });
      tl.to(
        '.slash',
        {
          rotate: '0',
          duration: '0.2',
        },
        '<'
      );

      let group = aniContextRef.current.firstChild;
      console.log(group);
      tl.to('#aniGroup', {
        translateY: "25rem",
        translateX: "-7rem",
        scale: '0.1',
        opacity: "0.2",
        scrollTrigger: {
          trigger: aniContextRef.current,
          start: 'top top',
          end: 'bottom top',
          markers: true,
          scrub: true,
        }
      })

      
    }, aniContextRef.current);

    return () => ctx.revert();
  }, []);

  
  return (
    <div
      ref={aniContextRef}
      id='aniContainer'
      className='bg-[--bg-color-nav] min-w-full h-[100vh] overflow-hidden flex justify-center items-center'
    >
      <div id="aniGroup" className='relative w-fit flex '>
        <p className='left text-[20rem]'>&lt;</p>
        <p className='cursor w-20 bg-[--text-primary] relative my-[7.2rem]'></p>
        <p className='text-[--bg-color-nav] bg-[--bg-color-nav] px-4'>_</p>
        <p className='slash text-[20rem] '>/</p>
        <p className='right text-[20rem]'>&gt;</p>
      </div>
    </div>
  );
}
