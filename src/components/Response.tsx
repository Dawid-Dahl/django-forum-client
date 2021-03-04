import React from "react";
import styled from "styled-components";

type Props = TPost;

const Response: React.FC<Props> = props => {
	return (
		<Wrapper>
			<p>Reply: {props.content}</p>
		</Wrapper>
	);
};

export default Response;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	min-width: 70%;
	height: auto;
	padding: 0.5em 1em;
	background-color: var(--delete-color);
	margin: 1em;
	text-decoration: none;
	border-radius: 10px;
	color: white;
	font-weight: lighter;
	text-align: center;
	transition: all 0.2s;

	p {
		font-size: 1em;
	}

	:hover {
		background-color: var(--delete-color-hover);
	}
`;
