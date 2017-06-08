import React from 'react';
import ReactDOM from 'react-dom';
import App from './react-text-collapse/react-text-collapse';

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

ReactDOM.render(<App />, appRoot);
