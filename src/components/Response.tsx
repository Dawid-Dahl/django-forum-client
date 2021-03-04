import React from "react";
import styled from "styled-components";

type Props = TPost;

const Response: React.FC<Props> = props => {
	return (
		<OuterWrapper>
			<InnerWrapper>
				<h6>Reply: {props.content}</h6>
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
