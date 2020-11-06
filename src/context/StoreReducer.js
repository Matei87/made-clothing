const StoreReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            }
        default:
            return state;
    }
};

export default StoreReducer;