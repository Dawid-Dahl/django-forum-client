import React from "react";
import styled from "styled-components";

type Props = Pick<TPost, "id" | "content">;

const Post: React.FC<Props> = ({id, content}) => {
	return (
		<OuterWrapper>
			<InnerWrapper>
				<h1>{content}</h1>
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
