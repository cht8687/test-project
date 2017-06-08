'use strict';

new Cleave('.input-0', {
    creditCard: true,
    onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {
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
    delimiter: '.'
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
//# sourceMappingURL=app.js.map