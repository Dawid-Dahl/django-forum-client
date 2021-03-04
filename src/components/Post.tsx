import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Response from "./Response";

type Props = {};

const Post: React.FC<Props> = () => {
	const [post, setPost] = useState<TPost | null>(null);
	const [responses, setResponses] = useState<TPost[] | null>(null);

	const postId = location.pathname.split("/")[3];

	useEffect(() => {
		fetch(`${process.env.DJANGO_API_URL}/api/post/detail/${postId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => {
				setPost(data);
			})
			.catch(console.error);
	}, []);

	useEffect(() => {
		fetch(`${process.env.DJANGO_API_URL}/api/post/replies/${postId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => {
				console.log("REPLIES", responses);
				setResponses(data);
			})
			.catch(console.error);
	}, []);

	return (
		<OuterWrapper>
			<InnerWrapper>
				{post && (
					<>
						<h1>Post: {post.title}</h1>
						<h3>{post.content}</h3>
						<p>The replies:</p>
						{responses &&
							responses.map(response => <Response {...response} key={response.id} />)}
					</>
				)}
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
