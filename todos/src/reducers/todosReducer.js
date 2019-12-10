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
			item: "Learn",
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
			return { ...state };
		case COMPLETE_TODO:
			return { ...state };
		default:
			return state;
	}
}
