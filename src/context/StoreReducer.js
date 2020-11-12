const StoreReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            };
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems]
            };
        default:
            return state;
    }
};

export default StoreReducer;