import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {JWTFetch} from "../utils/utils";

const Forum = () => {
	const [categories, setCategories] = useState<Array<TCategory>>([]);
	const [promptResult, setPromptResult] = useState<string | null>(null);

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

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const res = prompt("What do you want your discussion to be called?");

		console.log(res);

		if (res) setPromptResult(res);

		if (promptResult) {
			JWTFetch(`${process.env.DJANGO_API_URL}/api/category/create/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title: promptResult,
				}),
			})
				.then(res => res.json())
				.then(data => {
					setCategories([...categories, data]);
				})
				.catch(console.error);
		}
	};

	return (
		<OuterWrapper>
			<h1>Forum</h1>
			<InnerWrapper>
				<Button onClick={handleClick}>Start New Discussion</Button>
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
