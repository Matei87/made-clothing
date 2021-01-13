import CartActionsTypes from './cart.types';
import { addItemsToCart } from './cart.utils';

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionsTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart([state.cartItems, action.payload])
            };
        default:
            return state;
    }
}

export default cartReducer;