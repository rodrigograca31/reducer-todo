import React from "react";

export default function ListTodos(props) {
	return (
		<>
			{props.state.todos.map(todo => (
				<li>{todo.item}</li>
			))}
		</>
	);
}
