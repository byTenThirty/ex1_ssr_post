import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Home = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then((response) => {
				setTodos(response.data);
			});
	}, []);

	return (
		<div className="App">
			<div className="list-title">
				<h3>CSR 리스트</h3>
			</div>
			<ul>
				{todos.map(todo =>
					<Link to={`/todo/${todo.id}`}>
						 <li key={todo.id} className="list-li">
							 {todo.title}
							<span className="li-span">></span>
						 </li>
					</Link>
				)}
			</ul>
		</div>
	);
};

export default Home;
