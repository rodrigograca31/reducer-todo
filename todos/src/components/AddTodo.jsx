import React, { useReducer } from "react";
import { reducer, initialState } from "../reducers/todosReducer";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

const initialFormState = {
	todo: ""
};

const SUBMIT = "SUBMIT";
const INPUT_CHANGE = "INPUT_CHANGE";

function formReducer(state, action) {
	switch (action.type) {
		case SUBMIT:
			return initialFormState;
		case INPUT_CHANGE:
			return { ...state, [action.payload.name]: action.payload.value };
		default:
			return state;
	}
}

export default function AddTodo(props) {
	const [formState, dispatchForm] = useReducer(formReducer, initialFormState);

	const onValueChange = e => {
		const { name, value } = e.target;
		dispatchForm({ type: INPUT_CHANGE, payload: { name, value } });
	};

	const onSubmit = event => {
		event.preventDefault();
		props.dispatch({ type: "ADD_TODO", payload: { formState } });
		dispatchForm({ type: "SUBMIT" });
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<br />
				<Input
					type="text"
					placeholder="Todo?"
					value={formState.todo}
					onChange={onValueChange}
					name="todo"
				/>
				<Button type="submit" variant="contained" color="primary">
					Add
				</Button>
			</form>
		</>
	);
}
