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
				<h3>클라이언트사이드 리스트</h3>
			</div>
			<div className="list-content">
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
		</div>
	);
};

export default Home;
