import React from "react";
import styled from "styled-components";

type Props = {
	content: string;
	posts: Array<TPost>;
};

const Response: React.FC<Props> = ({content, posts}) => {
	return (
		<OuterWrapper>
			<InnerWrapper>
				<h6>Reply: {content}</h6>
			</InnerWrapper>
		</OuterWrapper>
	);
};

export default Response;

const OuterWrapper = styled.div``;

const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
