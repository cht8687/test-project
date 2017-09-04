'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactHover = require('react-hover');

var _reactHover2 = _interopRequireDefault(_reactHover);

var _css = require('./css');

var styles = _interopRequireWildcard(_css);

var _componentHtml = require('./componentHtml');

var componentHtml = _interopRequireWildcard(_componentHtml);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var optionsCursorFalse = {
  followCursor: false
};

var optionsCursorTrue = {
  followCursor: true
};

var optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { style: { margin: '0 auto', textAlign: 'center' } },
          ' Basic '
        ),
        _react2.default.createElement(_reactHover2.default, {
          styles: styles.basic,
          componentHtml: componentHtml.basicComponentHtml,
          options: optionsCursorFalse
        }),
        _react2.default.createElement(
          'h3',
          { style: { margin: '0 auto', marginTop: '100px', textAlign: 'center' } },
          ' You can include anything, e.g. image '
        ),
        _react2.default.createElement(_reactHover2.default, {
          styles: styles.advanced,
          componentHtml: componentHtml.advancedComponentHtml,
          options: optionsCursorTrue
        }),
        _react2.default.createElement(
          'h3',
          { style: { margin: '0 auto', marginTop: '100px', textAlign: 'center' } },
          ' You can set curor follow options, so the pop up will follow the mouse cursor.'
        ),
        _react2.default.createElement(_reactHover2.default, {
          styles: styles.cursor,
          componentHtml: componentHtml.advancedComponentHtml,
          options: optionsCursorTrueWithMargin
        })
      );
    }
  }]);

  return App;
}(_react.Component);

var appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

(0, _reactDom.render)(_react2.default.createElement(App, null), appRoot);
//# sourceMappingURL=App-hover.js.map