import '../scss/_Home.scss';
import Self from './Self';
import Main from './Main';

function Home() {
  return (
    <div className='home'>
      <div className='self-container'>
        <Self />
      </div>
      <div className='main-container'>
        <Main />
      </div>
    </div>
  );
}

export default Home;
