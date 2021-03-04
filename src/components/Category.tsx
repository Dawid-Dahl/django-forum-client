import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Link from "@material-ui/core/Link";
import Post from "./Post";

type Props = Pick<TCategory, "id" | "title">;

const Category: React.FC<Props> = ({id, title}) => {
	const [posts, setPosts] = useState<Array<TPost>>([]);
	const [postsByCategory, setPostsByCategory] = useState<Array<TPost>>([]);

	useEffect(() => {
		fetch(`${process.env.DJANGO_API_URL}/api/post/all`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => {
				setPosts(data);
				const category = parseInt(location.pathname.split("/")[3]);
				const filteredByCategory = data.filter((post: any) => post.category === category);
				setPostsByCategory(filteredByCategory);
			})
			.catch(console.error);
	}, []);

	return (
		<OuterWrapper>
			<h1>Category: {title}</h1>
			<InnerWrapper>
				{postsByCategory.map(post => (
					<Post key={post.id} id={post.id} content={post.content} posts={posts} />
				))}
			</InnerWrapper>
		</OuterWrapper>
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
