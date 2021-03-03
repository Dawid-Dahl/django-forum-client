import React, {useEffect, useState} from "react";
import {AuthenticatedApp} from "./components/AuthenticatedApp";
import {UnauthenticatedApp} from "./components/UnauthenticatedApp";
import {isUserLoggedIn} from "./utils/utils";

const App: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		console.log("YO!");
		console.log(isUserLoggedIn());
		isUserLoggedIn() ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, [isLoggedIn]);

	return (
		<>
			{isLoggedIn ? (
				<AuthenticatedApp setIsLoggedIn={setIsLoggedIn} />
			) : (
				<UnauthenticatedApp setIsLoggedIn={setIsLoggedIn} />
			)}
		</>
	);
};

export default App;
