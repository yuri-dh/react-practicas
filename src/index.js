import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './RelojMundial0';
import App from './RelojMundial';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
