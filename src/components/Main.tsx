import React, {useEffect} from "react";
import {isUserLoggedIn} from "../utils/utils";
import Forum from "./Forum";

type Props = {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Main: React.FC<Props> = ({setIsLoggedIn}) => {
	useEffect(() => {
		isUserLoggedIn() ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, []);

	return <Forum />;
};
export default Main;
