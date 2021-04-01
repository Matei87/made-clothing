import FavoriteActionsTypes from './favorite.types';

const INITIAL_STATE = {
    favoriteItems: []
}

const favoriteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FavoriteActionsTypes.ADD_FAVORITE:

            let item = action.payload;
            let exist = state.favoriteItems.find(x => x.id === item.id);
            if (exist) {
                return {
                    ...state,
                    favoriteItems: [...state.favoriteItems]
                }
            }
            return {
                ...state,
                favoriteItems: [...state.favoriteItems, action.payload]
            };
        case FavoriteActionsTypes.CLEAR_ITEM_FROM_FAVORITE:
            return {
                ...state,
                favoriteItems: state.favoriteItems.filter(favorite => favorite.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default favoriteReducer;