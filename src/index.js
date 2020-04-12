import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import Router from './router';
import store from '@/store/store';
import * as serviceWorker from './serviceWorker';
import Head from '@/components/Head';


console.log('S',store.getState());

ReactDOM.render(
   <Provider store={store}>
     <Head />
     <Router />
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
