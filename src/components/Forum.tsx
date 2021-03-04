import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Category from "./Category";
import TCategory from "./Category";
import Link from "@material-ui/core/Link";

const Forum = () => {
	const [categories, setCategories] = useState<Array<TCategory>>([]);

	useEffect(() => {
		fetch(`${process.env.DJANGO_API_URL}/api/category/all`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setCategories(data);
			})
			.catch(console.error);
	}, []);

	return (
		<OuterWrapper>
			<h1>Forum</h1>
			<InnerWrapper>
				{categories.map(category => (
					<Link key={category.id} href={`/forum/category/${category.id}`}>
						<Category key={category.id} id={category.id} title={category.title} />
					</Link>
				))}
			</InnerWrapper>
		</OuterWrapper>
	);
};

export default Forum;

const OuterWrapper = styled.div`
	height: 100vh;
	h1 {
		text-align: center;
	}
`;

const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
