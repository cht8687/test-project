'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _cleave = require('./cleave');

var _cleave2 = _interopRequireDefault(_cleave);

var App = (function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            new _cleave2['default']('.input-0', {
                creditCard: true,
                onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {
                    document.querySelector('.type').innerHTML = type;
                }
            });

            new _cleave2['default']('.input-3', {
                date: true,
                datePattern: ['Y', 'm', 'd'],
                delimiter: '.'
            });

            new _cleave2['default']('.input-4', {
                numeral: true,
                numeralDecimalMark: ',',
                delimiter: '.',
                copyDelimiter: false
            });

            new _cleave2['default']('.input-1', {
                numeral: true,
                prefix: '$'
            });

            new _cleave2['default']('.input-5', {
                uppercase: true,
                delimiters: ['.', '.', '-'],
                blocks: [3, 3, 3, 2]
            });

            new _cleave2['default']('.input-6', {
                uppercase: true,
                delimiter: '',
                prefix: 'UFO',
                blocks: [3, 6] // or [9]
            });

            new _cleave2['default']('.input-2', {
                numericOnly: true,
                delimiter: '.',
                prefix: 'BE',
                blocks: [5, 3, 3]
            });

            new _cleave2['default']('.input-7', {
                prefix: 'APPLE',
                uppercase: true,
                delimiter: '-',
                blocks: [4, 2, 3, 3]
            });

            console.log(new _cleave2['default']('.input-1', {
                numeral: true,
                prefix: '$',
                rawValueTrimPrefix: false
            }).getRawValue());

            console.log(new _cleave2['default']('.input-1', {
                numeral: true,
                prefix: '$',
                rawValueTrimPrefix: true
            }).getRawValue());
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'section',
                    null,
                    _react2['default'].createElement(
                        'p',
                        null,
                        'Credit card detector (',
                        _react2['default'].createElement(
                            'span',
                            { className: 'type' },
                            'unknown'
                        ),
                        '): '
                    ),
                    _react2['default'].createElement('input', { className: 'input-0' })
                ),
                _react2['default'].createElement(
                    'section',
                    null,
                    _react2['default'].createElement(
                        'p',
                        null,
                        'Date with "." as delimiter: '
                    ),
                    _react2['default'].createElement('input', { className: 'input-3' })
                ),
                _react2['default'].createElement(
                    'section',
                    null,
                    _react2['default'].createElement(
                        'p',
                        null,
                        'Numeral style like "1.234.567,89":'
                    ),
                    _react2['default'].createElement('input', { className: 'input-4 right' })
                ),
                _react2['default'].createElement(
                    'section',
                    null,
                    _react2['default'].createElement(
                        'p',
                        null,
                        'Numeral with "$" as prefix:'
                    ),
                    _react2['default'].createElement('input', { className: 'input-1 right' })
                ),
                _react2['default'].createElement(
                    'section',
                    null,
                    _react2['default'].createElement(
                        'p',
                        null,
                        'Use multiple delimiters:'
                    ),
                    _react2['default'].createElement('input', { className: 'input-5' })
                ),
                _react2['default'].createElement(
                    'section',
                    null,
                    _react2['default'].createElement(
                        'p',
                        null,
                        'Use empty delimiter:'
                    ),
                    _react2['default'].createElement('input', { className: 'input-6' })
                ),
                _react2['default'].createElement(
                    'section',
                    null,
                    _react2['default'].createElement(
                        'p',
                        null,
                        'V.A.T Identification Number:'
                    ),
                    _react2['default'].createElement('input', { className: 'input-2' })
                ),
                _react2['default'].createElement(
                    'section',
                    null,
                    _react2['default'].createElement(
                        'p',
                        null,
                        'Prefix (can be modified):'
                    ),
                    _react2['default'].createElement('input', { className: 'input-7' })
                )
            );
        }
    }]);

    return App;
})(_react.Component);

var appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

(0, _reactDom.render)(_react2['default'].createElement(App, null), appRoot);
//# sourceMappingURL=app-cleave.js.map