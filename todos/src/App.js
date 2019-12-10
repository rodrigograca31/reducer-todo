import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

import { reducer, initialState } from "./reducers/todosReducer";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="App">
			{state.todos.map(todo => (
				<li>{todo.item}</li>
			))}
		</div>
	);
}

export default App;
