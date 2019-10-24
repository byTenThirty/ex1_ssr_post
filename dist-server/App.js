"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./App.css");

var _Home = _interopRequireDefault(require("./routes/Home"));

var _Detail = _interopRequireDefault(require("./routes/Detail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  exact: true,
  component: _Home.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/todo/:id",
  component: _Detail.default
})));

var _default = App;
exports.default = _default;