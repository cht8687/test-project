import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactTextCollapse from 'react-text-collapse';


const TEXT_COLLAPSE_OPTIONS = {
	Collapse: false,
  collapseText: '... show more',
  expandText: 'show less'
}

class App extends Component {

  render() {

    return (
      <div>
        <ReactTextCollapse
        	options={TEXT_COLLAPSE_OPTIONS}
        > 
        <p>
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
           React text collapse is awesome. React text collapse is awesome.<br />
        </p>
        </ReactTextCollapse> 
      </div>
    );
  }
}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
