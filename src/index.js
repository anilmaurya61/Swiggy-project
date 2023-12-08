import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './app/store'
import { Provider } from 'react-redux'
import { UserProvider } from './context/authContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
