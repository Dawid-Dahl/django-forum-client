import React from "react";
import {History} from "history";
import history from "./history";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router";
import App from "./App";
import "regenerator-runtime/runtime";

ReactDOM.render(
	<Router history={history as History<History>}>
		<Route path="/" component={App} />
	</Router>,
	document.getElementById("root")
);
