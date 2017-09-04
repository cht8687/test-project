'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Display = require('./Display');

var _Display2 = _interopRequireDefault(_Display);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      text: 'Angular'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var text = this.state.text;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          type: 'text',
          defaultValue: text,
          onChange: this.valueChange.bind(this)
        }),
        _react2.default.createElement(_Display2.default, {
          text: text
        })
      );
    }
  }, {
    key: 'valueChange',
    value: function valueChange(e) {
      this.setState({
        text: e.currentTarget.value
      });
    }
  }]);

  return App;
}(_react.Component);

var appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

(0, _reactDom.render)(_react2.default.createElement(App, null), appRoot);
//# sourceMappingURL=Example.js.map