import {useState, useContext} from 'react';
import '../scss/_Home.scss';
import Self from './Self';
import Main from './Main';
import {navContext} from '../components/navContext';

function Home() {
  const [formStatus, setFormStatus] = useState(false);
  const {setNavStatus} = useContext(navContext);

  return (
    <div className='home'>
      <div className='self-container flex flex-col pb-6 lg:pb-0 lg:min-h-[92vh]'>
        <Self />
        <div className='mt-auto'>
          <a
            className='lg:block bg-[--text-secondary] text-[--bg-color] underline-offset-[3px] underline decoration-[1.7px] w-fit px-3 py-2 mb-4 lg:mt-auto mx-8 hover:translate-x-2 hover:cursor-pointer transition-all'
            href='mailto:lhyuan.liu21@icloud.com'
          >
            Contact Me
          </a>
          <a
            className='lg:block bg-[--text-secondary] text-[--bg-color] underline-offset-[3px] underline decoration-[1.7px] w-fit px-3 py-2 mb-4 mx-8 hover:translate-x-2 hover:cursor-pointer transition-all'
            href='#feedback'
    onClick={()=>{
      setFormStatus(true);
      setNavStatus("");
    }}
          >
            Feedback
          </a>
        </div>
      </div>
      <div className='main-container'>
        <Main formStatus={formStatus} setFormStatus={setFormStatus} />
      </div>
    </div>
  );
}

export default Home;
