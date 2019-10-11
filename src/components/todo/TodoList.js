import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onChangeDone, onDelete }) => (
	<ul>
		{todos.map(t => (
			<TodoItem
				key={t.id}
				id={t.id}
				value={t.value}
				done={t.done}
				onChangeDone={onChangeDone}
				onDelete={onDelete}
			/>
		))}
	</ul>
);

export default TodoList;
