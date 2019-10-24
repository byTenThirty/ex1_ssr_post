import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
	const { id } = useParams();
	const [todo, setTodo] = useState();

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(response => {
				setTodo(response.data);
			});
	}, [id]);

	return (
		<>
			{todo && (
				<div>
					<div className="list-title">
						<h3>CSR 리스트</h3>
					</div>
					<div className="detail-content">
						<h2>{`${todo.id}. ${todo.title}`}</h2>
					</div>
				</div>
			)}
		</>
	);
};

export default Detail;
