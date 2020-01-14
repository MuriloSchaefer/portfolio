export const portfolioReducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_REPOSITORY':
            return {
                ...state,
                todoItems: [...state.todoItems, action.todoItems]
            };
        default:
            throw new Error('Unexpected action');
    }
}