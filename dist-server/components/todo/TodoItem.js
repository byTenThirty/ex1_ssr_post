"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TodoItem = ({
  id,
  value,
  done,
  onChangeDone,
  onDelete
}) => _react.default.createElement("li", {
  style: {
    textDecoration: done ? 'line-through' : 'none'
  }
}, _react.default.createElement("span", {
  onClick: () => onChangeDone(id)
}, value), _react.default.createElement("button", {
  type: "button",
  onClick: () => onDelete(id)
}, "\uC0AD\uC81C"));

var _default = TodoItem;
exports.default = _default;