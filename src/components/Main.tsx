import React, {useEffect} from "react";
import {isUserLoggedIn} from "../utils/utils";

type Props = {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Main: React.FC<Props> = ({setIsLoggedIn}) => {
	useEffect(() => {
		isUserLoggedIn() ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, []);

	return <h1>MAIN!</h1>;
};
export default Main;
