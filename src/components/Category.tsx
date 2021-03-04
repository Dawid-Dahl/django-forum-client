import React from "react";
import styled from "styled-components";

const Category = () => {
	return (
		<OuterWrapper>
			<InnerWrapper>
				<h1>Category</h1>
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
