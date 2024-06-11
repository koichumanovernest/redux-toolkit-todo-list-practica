import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodos } from "../store/slice/todoThunk";
import Input from "../UI/Input";
import { Button } from "@mui/material";

const TodoForm = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");
	const [imgUrl, setImgUrl] = useState("");

	const handeleChangeText = (e) => setText(e.target.value);
	const handeleChangeTitle = (e) => setTitle(e.target.value);
	const handeleChangeImgUrl = (e) => setImgUrl(e.target.value);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const newData = {
			text,
			title,
			imgUrl,
		};
		if (title !== "" && text !== "" && imgUrl !== "") {
			dispatch(postTodos(newData));
		}
		setImgUrl("");
		setText("");
		setTitle("");
	};
	return (
		<form onSubmit={onSubmitHandler}>
			<Input onChange={handeleChangeText} value={text} placeholder="text" />
			<Input onChange={handeleChangeTitle} value={title} placeholder="title" />
			<Input
				onChange={handeleChangeImgUrl}
				value={imgUrl}
				type="url"
				placeholder="img Url"
			/>
			<Button
				type="submit"
				variant="outlined"
				disabled={title === "" && text === "" && imgUrl === ""}>
				add
			</Button>
		</form>
	);
};

export default TodoForm;
