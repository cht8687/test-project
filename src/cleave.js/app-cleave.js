import React, { Component } from 'react';
import { render } from 'react-dom';
import Cleave from './cleave';

class App extends Component {


  componentDidMount() {
    new Cleave('.input-0', {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
            document.querySelector('.type').innerHTML = type;
        }
    });

    new Cleave('.input-3', {
        date: true,
        datePattern: ['Y', 'm', 'd'],
        delimiter: '.'
    });

    new Cleave('.input-4', {
        numeral: true,
        numeralDecimalMark: ',',
        delimiter: '.',
        copyDelimiter: false,
    });

    new Cleave('.input-1', {
        numeral: true,
        prefix: '$'
    });

    new Cleave('.input-5', {
        uppercase: true,
        delimiters: ['.', '.', '-'],
        blocks: [3, 3, 3, 2]
    });

    new Cleave('.input-6', {
        uppercase: true,
        delimiter: '',
        prefix: 'UFO',
        blocks: [3, 6] // or [9]
    });

    new Cleave('.input-2', {
        numericOnly: true,
        delimiter: '.',
        prefix: 'BE',
        blocks: [5, 3, 3]
    });

    new Cleave('.input-7', {
        prefix: 'APPLE',
        uppercase: true,
        delimiter: '-',
        blocks: [4, 2, 3, 3]
    });

    console.log(
      new Cleave('.input-1', {
        numeral: true,
        prefix: '$',
        rawValueTrimPrefix: false
      }).getRawValue()
    );

    console.log(
      new Cleave('.input-1', {
        numeral: true,
        prefix: '$',
        rawValueTrimPrefix: true
      }).getRawValue()
    );
  }

  render() {

    return (
      <div>
          <section>
              <p>Credit card detector (<span className="type">unknown</span>): </p>
              <input className="input-0" />
          </section>
          
          <section>
              <p>Date with "." as delimiter: </p>
              <input className="input-3" />
          </section>
          
          <section>
              <p>Numeral style like "1.234.567,89":</p>
              <input className="input-4 right" />
          </section>
          
          <section>
              <p>Numeral with "$" as prefix:</p>
              <input className="input-1 right" />
          </section>
          
          <section>
              <p>Use multiple delimiters:</p>
              <input className="input-5" />
          </section>
          
          <section>
              <p>Use empty delimiter:</p>
              <input className="input-6" />
          </section>
          
          <section>
              <p>V.A.T Identification Number:</p>
              <input className="input-2" />
          </section>
          
          <section>
              <p>Prefix (can be modified):</p>
              <input  className="input-7" />
          </section>
            
      </div>
    );
  }
}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  

