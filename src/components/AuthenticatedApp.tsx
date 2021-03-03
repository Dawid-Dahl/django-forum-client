import React from "react";
import {Switch, Route} from "react-router";
import Main from "./Main";

type Props = {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthenticatedApp: React.FC<Props> = ({setIsLoggedIn}) => {
	return (
		<>
			<Switch>
				<Route
					path="/main"
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
