import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
	const { id } = useParams();
	const [post, setTodo] = useState();

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => {
				setTodo(response.data);
			});
	}, [id]);

	return (
		<>
			{post && (
				<div>
					<div className="list-title">
						<h3>클라이언트사이드 리스트</h3>
					</div>
					<div className="detail-content">
						<h2>{`${post.id}. ${post.title}`}</h2>
						<p>{post.body}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Detail;
