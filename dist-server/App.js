"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TodoInput = _interopRequireDefault(require("./components/todo/TodoInput"));

var _TodoList = _interopRequireDefault(require("./components/todo/TodoList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function App() {
  const [todos, setTodos] = (0, _react.useState)([]);

  const handleSubmit = value => {
    setTodos([...todos, {
      id: Date.now(),
      value: value,
      done: false
    }]);
  };

  const handleChangeDone = id => {
    const index = todos.findIndex(t => t.id === id);
    setTodos(prev => [...prev.slice(0, index), { ...prev[index],
      done: !prev[index].done
    }, ...prev.slice(index + 1)]);
  };

  const handleDelete = id => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement(_TodoInput.default, {
    onSubmit: handleSubmit
  }), _react.default.createElement(_TodoList.default, {
    todos: todos,
    onChangeDone: handleChangeDone,
    onDelete: handleDelete
  }));
}

var _default = App;
exports.default = _default;