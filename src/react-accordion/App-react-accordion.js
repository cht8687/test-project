import React, { Component } from 'react';
import ReactAccordion from 'react-accordion-components';
import {
  DATA,
  OPTIONS
} from './data';
import mingify from 'mingify';



let styles = {
  outerDiv: {
    overflowY: 'auto',
    outline: '1px solid #ADBCE0',
    width: '410px',
  },

  ul: {
    margin: '0px',
    listStyleType: 'none',
    padding: '0'
  },

  fixedPosition: {
    position : 'fixed',
    width : '383px',
    top: '0px'
  },

  listHeader: {
    width: '390px',
    height: '20px',
    background: 'grey',
    color: 'white',
    padding: '5px 0px 5px 20px',
    marginBottom: '3px'
  },

  listItems: {
    color: 'blue'
  },
};



export default class App extends Component {

  render() {
    const mingifyText = mingify('React');
    return (
      <span>
        <ReactAccordion 
          data={DATA} 
          options={OPTIONS}
          headerAttName="headerName"
          itemsAttName="items" 
          styles={styles}
        />
        {mingifyText}
      </span>
    );
  }
}