import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Post from "./Post";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

type Props = {};

const Category: React.FC<Props> = () => {
	const [category, setCategory] = useState<TCategory | null>(null);
	const [postsByCategory, setPostsByCategory] = useState<Array<TPost>>([]);
	const history = useHistory();

	const categoryId = location.pathname.split("/")[3];

	useEffect(() => {
		fetch(`${process.env.DJANGO_API_URL}/api/category/detail/${categoryId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => {
				setCategory(data);
			})
			.catch(console.error);
	}, []);

	useEffect(() => {
		fetch(`${process.env.DJANGO_API_URL}/api/post/category/${categoryId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => {
				setPostsByCategory(data);
				console.log("Posts by category: ", postsByCategory);
			})
			.catch(console.error);
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		history.push("/forum/new");
	};

	return (
		category && (
			<Wrapper>
				<h1>Category: {category.title}</h1>
				<Button onClick={handleClick}>Start A New Discussion</Button>
				{postsByCategory.map(post => (
					<Link key={post.id} to={`/forum/post/${post.id}`}>
						<p>{post.title}</p>
					</Link>
				))}
			</Wrapper>
		)
	);
};

export default Category;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	h1 {
		text-align: center;
	}

	a {
		min-width: 70%;
		padding: 1.5em;
		background-color: var(--delete-color);
		margin: 1em;
		text-decoration: none;
		border-radius: 10px;
		color: white;
		font-weight: lighter;
		text-align: center;
		transition: all 0.2s;

		:hover {
			background-color: var(--delete-color-hover);
		}
	}
`;
