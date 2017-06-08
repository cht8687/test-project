'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _cleaveReact = require('./cleave-react');

var _cleaveReact2 = _interopRequireDefault(_cleaveReact);

var App = (function (_Component) {
    _inherits(App, _Component);

    function App(props, context) {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props, context);

        this.state = {
            creditCardType: '',
            creditCardRawValue: '',
            phoneRawValue: '',
            dateRawValue: '',
            numeralRawValue: '',
            customRawValue: ''
        };

        this.onCreditCardChange = this.onCreditCardChange.bind(this);
        this.onCreditCardTypeChanged = this.onCreditCardTypeChanged.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onNumeralChange = this.onNumeralChange.bind(this);
        this.onCustomChange = this.onCustomChange.bind(this);
    }

    _createClass(App, [{
        key: 'onCreditCardChange',
        value: function onCreditCardChange(event) {
            this.setState({ creditCardRawValue: event.target.rawValue });
        }
    }, {
        key: 'onPhoneChange',
        value: function onPhoneChange(event) {
            this.setState({ phoneRawValue: event.target.rawValue });
        }
    }, {
        key: 'onDateChange',
        value: function onDateChange(event) {
            this.setState({ dateRawValue: event.target.rawValue });
        }
    }, {
        key: 'onNumeralChange',
        value: function onNumeralChange(event) {
            this.setState({ numeralRawValue: event.target.rawValue });
        }
    }, {
        key: 'onCustomChange',
        value: function onCustomChange(event) {
            this.setState({ customRawValue: event.target.rawValue });
        }
    }, {
        key: 'onCreditCardTypeChanged',
        value: function onCreditCardTypeChanged(type) {
            this.setState({ creditCardType: type });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_cleaveReact2['default'], { placeholder: 'Enter credit card number', options: { creditCard: true, onCreditCardTypeChanged: this.onCreditCardTypeChanged },
                    onChange: this.onCreditCardChange }),
                _react2['default'].createElement(_cleaveReact2['default'], { placeholder: 'Enter phone number', options: { phone: true, phoneRegionCode: 'AU' },
                    onChange: this.onPhoneChange }),
                _react2['default'].createElement(_cleaveReact2['default'], { placeholder: 'Enter date', options: { date: true, datePattern: ['Y', 'm', 'd'] },
                    onChange: this.onDateChange }),
                _react2['default'].createElement(_cleaveReact2['default'], { className: 'input-numeral', placeholder: 'Enter numeral', options: { numeral: true, numeralThousandsGroupStyle: 'thousand' },
                    onChange: this.onNumeralChange }),
                _react2['default'].createElement(_cleaveReact2['default'], { placeholder: 'Custom delimiter / blocks', options: { blocks: [4, 3, 3], delimiter: '-', numericOnly: true },
                    onChange: this.onCustomChange }),
                _react2['default'].createElement(
                    'div',
                    { className: 'raw-values' },
                    _react2['default'].createElement(
                        'p',
                        null,
                        'credit card: ',
                        this.state.creditCardRawValue
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        'credit card type: ',
                        this.state.creditCardType
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        'phone: ',
                        this.state.phoneRawValue
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        'date: ',
                        this.state.dateRawValue
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        'numeral: ',
                        this.state.numeralRawValue
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        'custom: ',
                        this.state.customRawValue
                    )
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
//# sourceMappingURL=app-cleave-react.js.map