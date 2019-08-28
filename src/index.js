import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './redux/redux-store'

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
    <App />
    </Provider>
</BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();
