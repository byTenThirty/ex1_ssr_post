"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TodoInput = ({
  onSubmit
}) => {
  const [input, setInput] = (0, _react.useState)('');

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInput('');
    onSubmit(input);
  };

  return _react.default.createElement("form", {
    onSubmit: handleSubmit
  }, _react.default.createElement("input", {
    type: "text",
    value: input,
    onChange: handleInput
  }));
};

var _default = TodoInput;
exports.default = _default;