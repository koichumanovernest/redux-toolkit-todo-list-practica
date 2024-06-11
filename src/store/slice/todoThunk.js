import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;


export const getTodos = createAsyncThunk(
	"todos/getTodos",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${url}/todos.json`);
			const transform = [];
			const result = response.data;
			for (let key in result) {
				transform.push({
					id: key,
					title: result[key].title,
					text: result[key].text,
					imgUrl: result[key].imgUrl,
				});
			}
			return transform;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const postTodos = createAsyncThunk(
	"todos/postTodos",
	async (data, { rejectWithValue, dispatch }) => {
		try {
			await axios.post(`${url}/todos.json`, data);
			dispatch(getTodos());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteTodos = createAsyncThunk(
	"todos/deleteTodos",
	async (id, { rejectWithValue, dispatch }) => {
		try {
			await axios.delete(`${url}/todos/${id}.json`);
			dispatch(getTodos());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);


export const putTodos = createAsyncThunk(
	"todos/putTodos",
	async (data, { rejectWithValue, dispatch }) => {
		try {
			await axios.put(`${url}/todos/${data.id}.json`, data);
			dispatch(getTodos());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);