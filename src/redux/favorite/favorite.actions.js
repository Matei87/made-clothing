import FavoriteActionsTypes from './favorite.types';

export const addFavorite = item => ({
    type: FavoriteActionsTypes.ADD_FAVORITE,
    payload: item
})

export const removeFavorite = item => ({
    type: FavoriteActionsTypes.CLEAR_ITEM_FROM_FAVORITE,
    payload: item
})