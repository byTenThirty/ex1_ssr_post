import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
			<Typography variant="h4" gutterBottom={true}>Post detail</Typography>
			<Paper>
				{post && (
					<Table stickyHeader aria-label="sticky table">
						<TableBody>
							<TableRow key="id">
								<TableCell key="name">ID</TableCell>
								<TableCell key="value">{post.id}</TableCell>
							</TableRow>
							<TableRow key="title">
								<TableCell key="name">Title</TableCell>
								<TableCell key="value">{post.title}</TableCell>
							</TableRow>
							<TableRow key="content">
								<TableCell key="name">Content</TableCell>
								<TableCell key="value">{post.body}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				)}
			</Paper>
		</>
	);
};

export default Detail;
