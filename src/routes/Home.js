import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				setPosts(response.data);
			});
	}, []);

	return (
		<div className="App">
			<div className="list-title">
				<h3>클라이언트사이드 리스트</h3>
			</div>
			<div className="list-content">
				<ul>
					{posts.map(post =>
						<Link key={post.id} to={`/post/${post.id}`}>
							<li key={post.id} className="list-li">
								{post.title}
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
