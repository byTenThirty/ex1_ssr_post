import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = React.useState(0);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				setPosts(response.data);
			});
	}, []);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	

	return (
		<div className="App">
			<div className="list-title">
				<h3>서버사이드 리스트</h3>
			</div>
			<Paper >
					<div >
						<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
							
								<TableCell align="center">
									ID
								</TableCell>
								<TableCell align="center">
									제목
								</TableCell>
								<TableCell align="center">
									본문
								</TableCell>
							
							</TableRow>
						</TableHead>
						<TableBody>
							{posts.slice(page * 5, page * 5 + 5).map((row, index) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
										<TableCell key={`${row.id}`} align="center">
											{row.id}
										</TableCell>
										<TableCell key={`${row.id}_${index}`} align="center">
											{row.title}
										</TableCell>
										<TableCell key={index} align="center">
											{row.body}
										</TableCell>
									</TableRow>
								);
							})}	
						</TableBody>
					</Table>
				</div>
				<TablePagination
					rowsPerPageOptions={[]}
					component="div"
					count={posts.length}
					rowsPerPage={5}
					page={page}
					backIconButtonProps={{
						'aria-label': 'previous page',
					}}
					nextIconButtonProps={{
						'aria-label': 'next page',
					}}
					onChangePage={handleChangePage}
				/>
			</Paper>
		</div>
	);
};

export default Home;
