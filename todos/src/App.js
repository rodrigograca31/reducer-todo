import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

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
			<input
				type="button"
				value="Clear Completed"
				onClick={clearCompleted}
			/>
		</div>
	);
}

export default App;
