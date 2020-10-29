import React from 'react';
import StoreContext from './StoreContext';

const StoreState = (props) => {
    const initialState = {
        sections: [
            {
                title: 'hats',
                image: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                link: 'shop/hats'
            },
            {
                title: 'jackets',
                image: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                link: 'shop/jackets'
            },
            {
                title: 'sneakers',
                image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                link: 'shop/sneakers'
            },
            {
                title: 'womens',
                image: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                link: 'shop/womens'
            },
            {
                title: 'mens',
                image: 'https://i.ibb.co/R70vBrQ/men.png',
                id: 5,
                link: 'shop/mens'
            }
        ]
    }
    //console.log(initialState.sections);

    return (
        <StoreContext.Provider
            value={{ sections: initialState.sections }}
        >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreState;