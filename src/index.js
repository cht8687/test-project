import React from 'react';
import ReactDOM from 'react-dom';
import App from './react-expandable-listview/App-expandable-listview';



const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

ReactDOM.render(<App />, appRoot);
