import { useEffect, useRef, useState } from 'react';
import '../scss/_Project.scss';
import Details from './Details';

export default function Project({ details }) {
  const imgURL = new URL(details['image'], import.meta.url).href;
  const summary = 'Tech/Tools';

  const aniRef = useRef(null);
  const [inSight, setInSight] = useState(false);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px 0px 250px 0px',
    };
    let observer = new IntersectionObserver((entries) => {
      let observed = entries[0];
      if (observed.isIntersecting) {
        setInSight(true);
        observer.unobserve(aniRef.current);
      }
    }, options);

    observer.observe(aniRef.current);
  }, []);

  return (
    <div
      ref={aniRef}
      className={'project p-8 ' + (inSight ? 'loading-animation' : '')}
    >
      <div className='group relative project-img mx-auto'>
        <img
          className='border-[--text-secondary] border-2'
          src={imgURL}
          alt='project image'
        />
        <div className='links transition-all ease-in duration-75 opacity-0 group-hover:visible group-hover:opacity-100 group-hover:transition-all'>
          <a
            className='mt-auto transition-all ease-out duration-75 hover:translate-x-[2px] hover:translate-y-[1px] hover:transition-all'
            href={details['github']}
          >
            GitHub Repo
          </a>
          <a
            className='mb-auto transition-all ease-out duration-75 hover:translate-x-[2px] hover:translate-y-[1px] hover:transition-all'
            href={details['livesite']}
          >
            Live Site
          </a>
        </div>
      </div>
      <div className='project-detail mt-6'>
        <p className='text-[1.4rem]'>{details['name']}</p>
        <p className='mt-4 text-[--text-secondary]'>{details['content']} </p>
        <ul className='my-2'>
          {details['points'].map((item, index) => (
            <li
              key={index}
              className='text-[--text-secondary] pl-4 text-[0.9rem]'
            >
              <span className='text-[--text-secondary] pr-2'>&#8226;</span>
              {item}
            </li>
          ))}
        </ul>
        <Details details={details} summary={summary} />
      </div>
    </div>
  );
}
