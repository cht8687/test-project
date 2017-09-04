'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactTextCollapse = require('react-text-collapse');

var _reactTextCollapse2 = _interopRequireDefault(_reactTextCollapse);

var TEXT_COLLAPSE_OPTIONS = {
  collapse: false,
  collapseText: '... show more',
  expandText: 'show less',
  minHeight: 70,
  maxHeight: 180
};

var App = (function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _reactTextCollapse2['default'],
          {
            options: TEXT_COLLAPSE_OPTIONS
          },
          _react2['default'].createElement(
            'p',
            null,
            'React text collapse is awesome. React text collapse is awesome.',
            _react2['default'].createElement('br', null),
            'React text collapse is awesome. React text collapse is awesome.',
            _react2['default'].createElement('br', null),
            'React text collapse is awesome. React text collapse is awesome.',
            _react2['default'].createElement('br', null),
            'React text collapse is awesome. React text collapse is awesome.',
            _react2['default'].createElement('br', null),
            'React text collapse is awesome. React text collapse is awesome.',
            _react2['default'].createElement('br', null),
            'React text collapse is awesome. React text collapse is awesome.',
            _react2['default'].createElement('br', null),
            'React text collapse is awesome. React text collapse is awesome.',
            _react2['default'].createElement('br', null),
            'React text collapse is awesome. React text collapse is awesome.',
            _react2['default'].createElement('br', null)
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
//# sourceMappingURL=react-text-collapse.js.map