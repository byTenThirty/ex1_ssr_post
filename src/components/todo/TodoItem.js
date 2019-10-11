import React from 'react';

const TodoItem = ({ id, value, done, onChangeDone, onDelete }) => (
	<li style={{ textDecoration: done ? 'line-through' : 'none' }}>
		<span onClick={() => onChangeDone(id)}>{value}</span>
		<button type="button" onClick={() => onDelete(id)}>삭제</button>
	</li>
);

export default TodoItem;
