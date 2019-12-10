import React, { useReducer } from "react";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import "./App.scss";

import { reducer, initialState } from "./reducers/todosReducer";

import ListTodos from "./components/ListTodos";
import AddTodo from "./components/AddTodo";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearCompleted = e => {
		console.log("clearCompleted");
		dispatch({ type: "CLEAR_COMPLETED" });
	};
	return (
		<div className="App">
			<ListTodos state={state} dispatch={dispatch}></ListTodos>
			<AddTodo dispatch={dispatch}></AddTodo>
			<br />
			<Button
				type="button"
				value=""
				onClick={clearCompleted}
				variant="contained"
				color="primary"
			>
				Clear Completed
			</Button>
		</div>
	);
}

export default App;
