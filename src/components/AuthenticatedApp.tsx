import React from "react";
import {Switch, Route} from "react-router";
import Main from "./Main";

export const AuthenticatedApp = () => {
	return (
		<>
			<Switch>
				<Route path="/main" component={Main} />
				<Route path="/" component={Main} />
			</Switch>
		</>
	);
};
