import {useState} from 'react';
import '../scss/_Home.scss';
import Self from './Self';
import Main from './Main';

function Home() {
  const [formStatus, setFormStatus] = useState(false);

  return (
    <div className='home'>
      <div className='self-container flex flex-col pb-6 lg:pb-0 lg:min-h-[96vh]'>
        <Self />
        <div className='mt-auto'>
          <a
            className='lg:block bg-[--text-primary] text-[--bg-color] underline-offset-[3px] underline decoration-[1.7px] w-fit px-3 py-2 mb-4 lg:mt-auto ml-8 mr-4 hover:translate-x-2 hover:cursor-pointer transition-all'
            href='mailto:lhyuan.liu21@icloud.com'
          >
            Contact Me
          </a>
          <a
            className='lg:block bg-[--text-primary] text-[--bg-color] underline-offset-[3px] underline decoration-[1.7px] w-fit px-3 py-2 mb-4 ml-4 lg:ml-8 hover:translate-x-2 hover:cursor-pointer transition-all'
            href='#feedback_header'
    onClick={()=>{
      setFormStatus(true);
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
