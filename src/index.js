import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import { App } from 'components';

import { persistor, store } from 'state/store';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/react-phonebook-private-public-routes">
          <App />
          <ToastContainer autoClose={2000} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
);
