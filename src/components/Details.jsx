import '../scss/_Details.scss';
import { useState, useRef, useEffect } from 'react';

export default function Details({ details, summary }) {
  const [dropdownStatus, setDropdownStatus] = useState(true);
  const dropdownRef = useRef();

  function clickHandler() {
    setDropdownStatus(!dropdownStatus);
  }

  useEffect(() => {
    let maxHeight = String(dropdownRef.current.offsetHeight);
    dropdownRef.current.style.setProperty('--max-height', maxHeight + 'px');
  }, []);

  return (
    <div
      className='group mt-4 dropdown hover:cursor-pointer'
      onClick={clickHandler}
    >
      <p className='mb-2 text-[1rem]'>
        <svg
          className={
            'inline-block relative bottom-[2px] mr-2 w-[0.6rem] rotate-90 transition-all ease-linear duration-75 ' +
            (dropdownStatus ? '' : 'hero-close')
          }
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 256 512'
        >
          <path
            className='fill-[--text-primary]'
            d='M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z'
          />
        </svg>
        {summary}:
      </p>
      <div className='overflow-hidden h-fit'>
        <div
          ref={dropdownRef}
          className={
            'flex flex-wrap gap-2 ml-5 max-h-[--max-height] transition-all ease-in-out duration-100 ' +
            (dropdownStatus ? '' : 'content-close')
          }
        >
          {details[summary].map((item, index) => (
            <p
              key={index}
              className='px-2 py-0.5 bg-[--text-secondary] text-[--bg-color] sm:text-[0.9rem]'
            >
              #{item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
