import React from "react";
import styled from "styled-components";
import Response from "./Response";

type Props = {
	id: number;
	content: string;
	posts: Array<TPost>;
};

const Post: React.FC<Props> = ({id, content, posts}) => {
	const category = parseInt(location.pathname.split("/")[3]);
	console.log(posts);
	const filteredByCategory = posts.filter((post: any) => post.parent === id);
	return (
		<OuterWrapper>
			<InnerWrapper>
				<h1>{content}</h1>
				<h3>Replies:</h3>
				{filteredByCategory.map(response => (
					<Response key={response.id} content={response.content} posts={posts} />
				))}
			</InnerWrapper>
		</OuterWrapper>
	);
};

export default Post;

const OuterWrapper = styled.div``;

const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
