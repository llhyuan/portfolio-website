import { Outlet } from 'react-router-dom';
import './_Root.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Root() {
  return (
    <div className='root'>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  );
}

export default Root;
