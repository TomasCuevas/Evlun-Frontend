import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/store';

import { EvlunApp } from './EvlunApp';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <EvlunApp />
    </Provider>
  </BrowserRouter>,
);
