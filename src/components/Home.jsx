import { useState } from 'react';
import '../scss/_Home.scss';
import Self from './Self';
import Main from './Main';

function Home() {
  const [formStatus, setFormStatus] = useState(false);

  return (
    <div className='home'>
      <div className='self-container'>
        <Self setFormStatus={setFormStatus} />
      </div>
      <div className='main-container'>
        <Main formStatus={formStatus} setFormStatus={setFormStatus} />
      </div>
    </div>
  );
}

export default Home;
