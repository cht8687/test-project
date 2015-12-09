import React, { Component } from 'react';
import ReactListView from 'react-listview-sticky-header';
import { DATA } from './data';

let styles = {
  outerDiv: {
    height: '400px',
    overflowY: 'auto',
    outline: '1px dashed blue',
    width: '400px',
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
    width: '383px',
    height: '20px',
    background: 'green',
    color: 'white'
  },

  listItems: {
    color: 'blue'
  },
};

export default class App extends Component {

  render() {
    return (
      <ReactListView 
        data={DATA} 
        headerAttName="headerName"
        itemsAttName="items" 
        styles={styles}
      />
    );
  }
}
