import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const Forum = () => {
	const [categories, setCategories] = useState<Array<TCategory>>([]);

	useEffect(() => {
		fetch(`${process.env.DJANGO_API_URL}/api/category/all`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setCategories(data);
				console.log(categories);
			})
			.catch(console.error);
	}, []);

	return (
		<OuterWrapper>
			<h1>Forum</h1>
			<InnerWrapper>
				<Button>Start New Discussion</Button>
				{categories.map(category => (
					<Link key={category.id} to={`/forum/category/${category.id}`}>
						<p>{category.title}</p>
					</Link>
				))}
			</InnerWrapper>
		</OuterWrapper>
	);
};

export default Forum;

const OuterWrapper = styled.div`
	height: 100vh;

	h1 {
		text-align: center;
	}

	a {
		width: 30%;
		padding: 1.5em;
		background-color: var(--main-color);
		margin: 1em;
		text-decoration: none;
		border-radius: 10px;
		color: white;
		font-weight: lighter;
		text-align: center;
		transition: all 0.2s;

		:hover {
			background-color: var(--main-color-border);
		}
	}
`;

const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
