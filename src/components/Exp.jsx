import { useEffect, useRef, useState } from 'react';
import Details from './Details';
export default function Experience({ details }) {
  const summary = 'Transferable Skills';
  const [isInsight, setInSight] = useState(false);
  const aniRef = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px 0px 100px 0px',
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
      className={
        'group exp p-8 hover:transition-all sm:flex sm:justify-between ' +
        (isInsight ? 'loading-animation' : '')
      }
    >
      <div className='mb-4 sm:max-w-[30%]'>
        <p className='text-[1rem] pb-[0.8rem]'>{details['period']}</p>
        <p className='text-[1.3rem]'>{details['title']}</p>
        <p className='text-[--text-secondary]'>{details['responsibility']}</p>
      </div>
      <div className='sm:max-w-[65%] text-[--text-secondary]'>
        <ul className='my-2'>
          {details['description'].map((item, index) => (
            <li
              key={index}
              className='text-[--text-secondary] pl-4 text-[1.1rem]'
            >
              <span className='text-[--text-secondary] pr-2'>&#8226;</span>
              {item}
            </li>
          ))}
        </ul>
        {details[summary].length > 0 ? (
          <Details details={details} summary={summary} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
