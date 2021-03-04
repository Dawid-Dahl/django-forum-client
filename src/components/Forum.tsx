import React, {useState} from "react";
import styled from "styled-components";

const Forum = () => {
	const [categories, setCategories] = useState<Array<Category>>([]);

	fetch(`${process.env.DJANGO_API_URL}/api/category/all`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(res => res.json())
		.then(data => {
			console.log(data);
		})
		.catch(console.error);

	return (
		<OuterWrapper>
			<InnerWrapper>
				<h1>Forum</h1>
			</InnerWrapper>
		</OuterWrapper>
	);
};

export default Forum;

const OuterWrapper = styled.div`
	height: 100vh;
`;

const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
