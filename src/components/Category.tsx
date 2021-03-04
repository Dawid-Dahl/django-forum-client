import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Link from "@material-ui/core/Link";
import Post from "./Post";

type Props = Pick<TCategory, "id" | "title">;

const Category: React.FC<Props> = ({id, title}) => {
	const [posts, setPosts] = useState<Array<TPost>>([]);

	useEffect(() => {
		fetch(`${process.env.DJANGO_API_URL}/api/post/all`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => {
				const category = parseInt(location.pathname.split("/")[3]);
				const filteredByCategory = data.filter((post: any) => post.category === category);
				setPosts(filteredByCategory);
			})
			.catch(console.error);
	}, []);

	return (
		<OuterWrapper>
			<h1>{title}</h1>
			<InnerWrapper>
				{posts.map(post => (
					<Post key={post.id} id={post.id} content={post.content} />
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
