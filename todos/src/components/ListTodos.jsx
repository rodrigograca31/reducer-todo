import React from "react";
import moment from "moment";
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
					{/* {moment(new Date(Date.now() - 60000)).fromNow()} */}
					{todo.item}
					<br />
					{moment(todo.id).fromNow()}
				</li>
			))}
		</ol>
	);
}
