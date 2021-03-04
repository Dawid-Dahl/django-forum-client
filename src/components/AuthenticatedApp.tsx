import React from "react";
import {Switch, Route} from "react-router";
import Category from "./Category";
import Main from "./Main";

type Props = {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthenticatedApp: React.FC<Props> = ({setIsLoggedIn}) => {
	return (
		<>
			<Switch>
				<Route path={`/forum/category/:id`} component={Category} />
				<Route
					path="/forum"
					render={props => <Main {...props} setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route
					path="/"
					render={props => <Main {...props} setIsLoggedIn={setIsLoggedIn} />}
				/>
			</Switch>
		</>
	);
};
