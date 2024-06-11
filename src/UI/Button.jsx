import { Button as MuiButton } from "@mui/material";
import React from "react";

const Button = ({ onClick, children, type = "button", ...rest }) => {
	return (
		<MuiButton onClick={onClick} type={type} {...rest}>
			{children}
		</MuiButton>
	);
};

export default Button;
