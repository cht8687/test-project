import React from 'react';
import ReactDOM from 'react-dom';
import App from './react-listview-sticky-header/app';



const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

ReactDOM.render(<App />, appRoot);
