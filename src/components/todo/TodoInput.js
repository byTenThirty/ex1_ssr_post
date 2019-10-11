import React, { useState } from 'react';

const TodoInput = ({ onSubmit }) => {
	const [input, setInput] = useState('');

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setInput('');
		onSubmit(input);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={input} onChange={handleInput} />
		</form>
	);
};

export default TodoInput;
