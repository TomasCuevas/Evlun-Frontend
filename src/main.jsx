import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext/AuthContext';
import { EvlunApp } from './EvlunApp';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <EvlunApp />
    </AuthProvider>
  </BrowserRouter>,
);
