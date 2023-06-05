import { useState } from 'react';
import Self from './Self';
import Main from './Main';

function Home() {
  const [formStatus, setFormStatus] = useState(false);

  
  return (
    <div className='lg:relative lg:my-0 lg:mx-auto lg:flex lg:max-w-[1440px]'>
      <div className='flex flex-col lg:flex-[2] lg:pb-0'>
        <Self setFormStatus={setFormStatus} />
          </div>
      <div className='lg:flex-[3] lg:overflow-scroll lg:h-[89vh] lg:scroll-smooth'>
        <Main formStatus={formStatus} setFormStatus={setFormStatus} />
      </div>
    </div>
  );
}

export default Home;
