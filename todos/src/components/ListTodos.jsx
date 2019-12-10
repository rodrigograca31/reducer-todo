import React from "react";

export default function ListTodos(props) {
	const completeTodo = todo => {
		console.log(todo);

		props.dispatch({ type: "COMPLETE_TODO", payload: todo });
	};
	return (
		<ol>
			{props.state.todos.map(todo => (
				<li
					className={todo.completed === true ? "completed" : ""}
					onClick={e => completeTodo(todo)}
					key={todo.id}
				>
					{todo.item}
				</li>
			))}
		</ol>
	);
}
