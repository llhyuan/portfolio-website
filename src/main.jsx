import ReactDOM from 'react-dom/client';

import Root from './Root.jsx';
import './index.css';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
