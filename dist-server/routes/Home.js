"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

require("../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Home = () => {
  const [todos, setTodos] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    _axios.default.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      setTodos(response.data);
    });
  }, []);
  return _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement("div", {
    className: "list-title"
  }, _react.default.createElement("h3", null, "CSR \uB9AC\uC2A4\uD2B8")), _react.default.createElement("ul", null, todos.map(todo => _react.default.createElement(_reactRouterDom.Link, {
    to: `/todo/${todo.id}`
  }, _react.default.createElement("li", {
    key: todo.id,
    className: "list-li"
  }, todo.title, _react.default.createElement("span", {
    className: "li-span"
  }, ">"))))));
};

var _default = Home;
exports.default = _default;