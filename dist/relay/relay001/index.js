'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      fragment on HackerNewsItem {\n        id\n        title,\n        score,\n        url\n        by {\n          id\n        }\n      }\n    '], ['\n      fragment on HackerNewsItem {\n        id\n        title,\n        score,\n        url\n        by {\n          id\n        }\n      }\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      fragment on HackerNewsAPI {\n        topStories { ', ' },\n      }\n    '], ['\n      fragment on HackerNewsAPI {\n        topStories { ', ' },\n      }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      query root {\n        hn { ', ' },\n      }\n    '], ['\n      query root {\n        hn { ', ' },\n      }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var item = this.props.store;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement(
            'a',
            { href: item.url },
            item.title
          )
        ),
        _react2.default.createElement(
          'h2',
          null,
          item.score,
          ' - ',
          item.by.id
        ),
        _react2.default.createElement('hr', null)
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

;

Item = _reactRelay2.default.createContainer(Item, {
  fragments: {
    store: function store() {
      return _reactRelay2.default.QL(_templateObject);
    }
  }
});

var HackerNewsRoute = function (_Relay$Route) {
  _inherits(HackerNewsRoute, _Relay$Route);

  function HackerNewsRoute() {
    _classCallCheck(this, HackerNewsRoute);

    return _possibleConstructorReturn(this, (HackerNewsRoute.__proto__ || Object.getPrototypeOf(HackerNewsRoute)).apply(this, arguments));
  }

  return HackerNewsRoute;
}(_reactRelay2.default.Route);

HackerNewsRoute.routeName = 'HackerNewsRoute';
HackerNewsRoute.queries = {
  store: function store(Component) {
    // Component is our Item
    return _reactRelay2.default.QL(_templateObject3, Component.getFragment('store'));
  }
};


_reactRelay2.default.injectNetworkLayer(new _reactRelay2.default.DefaultNetworkLayer('http://www.GraphQLHub.com/graphql'));

var TopItems = function (_React$Component2) {
  _inherits(TopItems, _React$Component2);

  function TopItems() {
    _classCallCheck(this, TopItems);

    return _possibleConstructorReturn(this, (TopItems.__proto__ || Object.getPrototypeOf(TopItems)).apply(this, arguments));
  }

  _createClass(TopItems, [{
    key: 'render',
    value: function render() {
      var items = this.props.store.topStories.map(function (store, idx) {
        return _react2.default.createElement(Item, { store: store, key: idx });
      });
      return _react2.default.createElement(
        'div',
        null,
        items
      );
    }
  }]);

  return TopItems;
}(_react2.default.Component);

TopItems = _reactRelay2.default.createContainer(TopItems, {
  fragments: {
    store: function store() {
      return _reactRelay2.default.QL(_templateObject2, Item.getFragment('store'));
    }
  }
});

var mountNode = document.getElementById('container');
var rootComponent = _react2.default.createElement(_reactRelay2.default.RootContainer, {
  Component: TopItems,
  route: new HackerNewsRoute() });
_reactDom2.default.render(rootComponent, mountNode);
//# sourceMappingURL=index.js.map