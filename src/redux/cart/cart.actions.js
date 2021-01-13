import CartActionsTypes from './cart.types';

export const addItem = item => ({
    type: CartActionsTypes.ADD_ITEM,
    payload: item
});