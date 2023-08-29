import React from 'react';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/store';
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root');

const appRoot = createRoot(rootElement);
appRoot.render(
    <Provider store={store}>
        <App />
    </Provider>
);
