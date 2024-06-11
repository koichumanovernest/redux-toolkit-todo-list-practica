import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "./../UI/Button";
import { deleteTodos } from "./../store/slice/todoThunk";
import { useDispatch } from "react-redux";

const Todo = ({ id, text, title, imgUrl }) => {
	const dispatch = useDispatch();

	const handeleDeleteTodos = () => {
		dispatch(deleteTodos(id));
	};
	return (
		<Box>
			<Typography>{text}</Typography>
			<Typography>{title}</Typography>
			<img src={imgUrl} alt="" />
			<Button onClick={handeleDeleteTodos}>deleteTodos</Button>
		</Box>
	);
};

export default Todo;
