import React, {useEffect, useState} from "react";
import {AuthenticatedApp} from "./components/AuthenticatedApp";
import {UnauthenticatedApp} from "./components/UnauthenticatedApp";
import {isUserLoggedIn} from "./utils/utils";

const App: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		isUserLoggedIn() ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, []);

	return <>{isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
};

export default App;
