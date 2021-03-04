import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Post from "./Post";

type Props = {};

const Category: React.FC<Props> = () => {
	const [category, setCategory] = useState<TCategory | null>(null);
	const [postsByCategory, setPostsByCategory] = useState<Array<TPost>>([]);

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

	return (
		category && (
			<OuterWrapper>
				<h1>Category: {category.title}</h1>
				<InnerWrapper>
					{postsByCategory.map(post => (
						<Link key={post.id} to={`/forum/post/${post.id}`}>
							<p>{post.title}</p>
						</Link>
					))}
				</InnerWrapper>
			</OuterWrapper>
		)
	);
};

export default Category;

const OuterWrapper = styled.div``;

const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
