import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

import { reducer, initialState } from "./reducers/todosReducer";

import ListTodos from "./components/ListTodos";
import AddTodo from "./components/AddTodo";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="App">
			<ListTodos state={state}></ListTodos>
			<AddTodo dispatch={dispatch}></AddTodo>
		</div>
	);
}

export default App;
