const addItemToCart = (cartItems, cartItemToAdd) => {
    const itemAct = cartItemToAdd.find(x => x.id)
    let exist = cartItems.find(x => x.id === itemAct.id)

    return (exist) ?
        [...cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
        )]
        :
        [...cartItems, { ...cartItemToAdd, qty: 1 }]
}

const StoreReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_FAVORITE':
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
            const itemAct = action.payload.find(x => x.id);
            const items = action.payload.map(x => x)
            const act = action.payload;
            const itemz = action.payload.qty;
            //let ids = item.find(x => x);
            // let idss = ids.find(x => x)
            let exist = state.cartItems.find(x => x.id === itemAct[0])
            console.log(state.cartItems, items, exist);

            if (exist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === itemAct[0] ? { ...item, qty: item.qty + 1 } : item
                    )
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, qty: 1 }]
                };
            }


        // return {
        //     ...state,
        //     cartItems: addItemToCart(state.cartItems, action.payload)
        // }

        default:
            return state;
    }
};

export default StoreReducer;