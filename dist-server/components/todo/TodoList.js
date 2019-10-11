"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TodoItem = _interopRequireDefault(require("./TodoItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TodoList = ({
  todos,
  onChangeDone,
  onDelete
}) => _react.default.createElement("ul", null, todos.map(t => _react.default.createElement(_TodoItem.default, {
  key: t.id,
  id: t.id,
  value: t.value,
  done: t.done,
  onChangeDone: onChangeDone,
  onDelete: onDelete
})));

var _default = TodoList;
exports.default = _default;