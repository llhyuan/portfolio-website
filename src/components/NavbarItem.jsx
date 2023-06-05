import { useContext } from 'react';
import { navContext } from '../components/navContext';

export default function NavbarItem({ tag }) {
  const { navStatus, setNavStatus } = useContext(navContext);
  const id = 'nav_' + tag.toLowerCase();
  const active = (navStatus == id) ? true : false;

  function clickHandler() {
    setNavStatus(id);
  }

  return (
    <a id={id} href={"#"+tag.toLowerCase()} className='group block mx-[0.7rem]' onClick={clickHandler}>
      <div className='flex mx-2 pb-[calc(1.8rem-0.25rem)] pt-[1.8rem]'>
        <p
          className={
            'pr-[3px] transition-all ease-out duration-100 group-hover:translate-x-[-0.8rem] group-hover:opacity-0' +
            (active ? ' opacity-0' : ' opacity-100')
          }
        >
          &quot;
        </p>
        <p className={ 'transition-all ease-out duration-100 group-hover:scale-[1.05]' + (active ? ' scale-105 font-bold' : '') }>
          {tag}
        </p>
        <p className={
            'pl-[3px] transition-all ease-out duration-100 group-hover:translate-x-[0.8rem] group-hover:opacity-0' +
            (active ? ' opacity-0' : ' opacity-100')
          }>
          &quot;
        </p>
      </div>
      <div className='flex justify-center'>
        <div
          className={
            'bg-[--bg-color-active] h-[0.25rem]' +
            (navStatus == id ? ' w-full ' : ' w-0 ') +
            'transition-all duration-150 ease-out group-hover:w-full'
          }
        ></div>
      </div>
    </a>
  );
}
