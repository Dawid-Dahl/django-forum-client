import React from "react";
import {Switch, Route} from "react-router";
import Registration from "./Register";
import Login from "./Login";

type Props = {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UnauthenticatedApp: React.FC<Props> = ({setIsLoggedIn}) => {
	return (
		<>
			<Switch>
				<Route
					exact
					path="/"
					render={props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route
					path="/login"
					render={props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route
					path="/register"
					render={props => <Registration {...props} setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route
					path="/"
					render={props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
				/>
			</Switch>
		</>
	);
};
