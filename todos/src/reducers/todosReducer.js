// STEP 1 - Initial State
export const initialState = {
	todos: [
		// Todo structure
		{
			item: "Learn about reducers",
			completed: false,
			id: Date.now()
		},
		{
			item: "Learn things",
			completed: false,
			id: Date.now() + 3
		}
	]
};

// STEP 2 - DECIDE WHAT TYPES OF ACTIONS MIGHT HAPPEN
const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";

// STEP 3 - BUILD A REDUCER FUNCTION
export function reducer(state, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [
					...state.todos,
					{
						item: action.payload.formState.todo,
						completed: false,
						id: Date.now()
					}
				]
			};
		case COMPLETE_TODO:
			console.log("complete", action.payload);

			return {
				...state,
				todos: [
					...state.todos.map(todo => {
						if (todo.id === action.payload.id) {
							return { ...todo, completed: !todo.completed };
						}
						return todo;
					})
				]
			};
		default:
			return state;
	}
}
