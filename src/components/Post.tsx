import React from "react";
import styled from "styled-components";

const Post = () => {
	return (
		<OuterWrapper>
			<InnerWrapper>
				<h1>Post</h1>
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
