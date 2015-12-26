'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactListviewStickyHeaderApp = require('./react-listview-sticky-header/app');

var _reactListviewStickyHeaderApp2 = _interopRequireDefault(_reactListviewStickyHeaderApp);

var appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

_reactDom2['default'].render(_react2['default'].createElement(_reactListviewStickyHeaderApp2['default'], null), appRoot);
//# sourceMappingURL=index.js.map