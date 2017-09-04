'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactListviewStickyHeader = require('react-listview-sticky-header');

var _reactListviewStickyHeader2 = _interopRequireDefault(_reactListviewStickyHeader);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  outerDiv: {
    height: '400px',
    overflowY: 'auto',
    outline: '1px dashed blue',
    width: '400px'
  },

  ul: {
    margin: '0px',
    listStyleType: 'none',
    padding: '0'
  },

  fixedPosition: {
    position: 'fixed',
    width: '383px',
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
  }
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
      var data = this.props.data;

      return _react2.default.createElement(_reactListviewStickyHeader2.default, {
        data: data,
        headerAttName: 'headerName',
        itemsAttName: 'items',
        styles: styles
      });
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  data: _react.PropTypes.array.isRequired
};


var appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

(0, _reactDom.render)(_react2.default.createElement(App, { data: _data.DATA }), appRoot);
//# sourceMappingURL=app.js.map