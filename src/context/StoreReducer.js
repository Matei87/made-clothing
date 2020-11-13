const StoreReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_FAVORITE':
            //let item = action.payload;
            //const exist = state.favorites
            return {
                ...state,
                favorites: [action.payload, ...state.favorites]
            };
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.payload.id)
            }
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        case 'ADD_ITEM_TO_CART':
            // const item = action.payload;
            // let ids = item.map(x => x.id);
            // let idss = ids.find(x => x)
            // console.log(ids, idss);
            // const existItem = state.cartItems.map(x => x.id);
            // //const exist = existItem.find(x => x === idss);
            // const exist = existItem.includes(idss)
            // console.log(exist, ids, existItem, item[0], idss);
            // if (existItem) {
            //     return {
            //         ...state,
            //         cartItems: state.cartItems.map(x => console.log(x))
            //     }
            // }
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems]
            };
        default:
            return state;
    }
};

export default StoreReducer;