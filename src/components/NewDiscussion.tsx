import React, {useState} from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {ThemeProvider} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {getAndSetTokens} from "../utils/utils";
import {darkTheme, useStyles} from "../material-ui/styles";

type Props = {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewDiscussion: React.FC<Props> = ({setIsLoggedIn}) => {
	const history = useHistory();

	const [formData, setFormData] = useState({
		title: "",
		content: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});

		console.log(formData);
	};

	const classes = useStyles();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetch(`${process.env.DJANGO_API_URL}/api/post/create/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(Object.freeze(formData)),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			})
			.catch(console.error);
	};

	return (
		<OuterWrapper>
			<ThemeProvider theme={darkTheme}>
				<Container component="main" maxWidth="xs">
					<div className={classes.paper}>
						<Avatar className={classes.avatar} style={{backgroundColor: "#3f9bbe"}}>
							<PostAddIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Add A New Discussion
						</Typography>
						<form className={classes.form} onSubmit={handleSubmit}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="title"
								label="Title"
								type="title"
								id="title"
								onChange={handleChange}
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="content"
								label="Content"
								type="content"
								id="content"
								onChange={handleChange}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="default"
								className={classes.submit}
							>
								Add Discussion
							</Button>
						</form>
					</div>
				</Container>
			</ThemeProvider>
		</OuterWrapper>
	);
};

export default NewDiscussion;

const OuterWrapper = styled.div`
	height: 100vh;
`;

const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: white;
`;
