import React, { useReducer } from 'react';
import StoreContext from './StoreContext';
import StoreReducer from './StoreReducer';

import hats from '../img/hats.png';
import jackets from '../img/jackets.png';
import sneakers from '../img/sneakers.png';
import womens from '../img/womens.png';
import mens from '../img/men.png';

const StoreState = (props) => {
    const initialState = {
        sections: [
            {
                title: 'hats',
                image: hats,
                id: 1,
                link: 'hats'
            },
            {
                title: 'jackets',
                image: jackets,
                id: 2,
                link: 'jackets'
            },
            {
                title: 'sneakers',
                image: sneakers,
                id: 3,
                link: 'sneakers'
            },
            {
                title: 'womens',
                image: womens,
                id: 4,
                link: 'womens'
            },
            {
                title: 'mens',
                image: mens,
                id: 5,
                link: 'mens'
            }
        ],
        shopData: [
            {
                id: 1,
                title: 'Hats',
                image: hats,
                routeName: 'hats',
                items: [
                    {
                        id: 1,
                        name: 'Brown Brim',
                        image: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                        price: 25
                    },
                    {
                        id: 2,
                        name: 'Blue Beanie',
                        image: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                        price: 18
                    },
                    {
                        id: 3,
                        name: 'Brown Cowboy',
                        image: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                        price: 35
                    },
                    {
                        id: 4,
                        name: 'Grey Brim',
                        image: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                        price: 25
                    },
                    {
                        id: 5,
                        name: 'Green Beanie',
                        image: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                        price: 18
                    },
                    {
                        id: 6,
                        name: 'Palm Tree Cap',
                        image: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                        price: 14
                    },
                    {
                        id: 7,
                        name: 'Red Beanie',
                        image: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                        price: 18
                    },
                    {
                        id: 8,
                        name: 'Wolf Cap',
                        image: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                        price: 14
                    },
                    {
                        id: 9,
                        name: 'Blue Snapback',
                        image: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                        price: 16
                    }
                ]
            },
            {
                id: 2,
                title: 'Sneakers',
                image: sneakers,
                routeName: 'sneakers',
                items: [
                    {
                        id: 1,
                        name: 'Adidas NMD',
                        image: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                        price: 220
                    },
                    {
                        id: 2,
                        name: 'Adidas Yeezy',
                        image: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                        price: 280
                    },
                    {
                        id: 3,
                        name: 'Black Converse',
                        image: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                        price: 110
                    },
                    {
                        id: 4,
                        name: 'Nike White AirForce',
                        image: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                        price: 160
                    },
                    {
                        id: 5,
                        name: 'Nike Red High Tops',
                        image: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                        price: 160
                    },
                    {
                        id: 6,
                        name: 'Nike Brown High Tops',
                        image: 'https://i.ibb.co/fMTV342/nike-brown.png',
                        price: 160
                    },
                    {
                        id: 7,
                        name: 'Air Jordan Limited',
                        image: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                        price: 190
                    },
                    {
                        id: 8,
                        name: 'Timberlands',
                        image: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                        price: 200
                    }
                ]
            },
            {
                id: 3,
                title: 'Jackets',
                image: jackets,
                routeName: 'jackets',
                items: [
                    {
                        id: 1,
                        name: 'Black Jean Shearling',
                        image: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                        price: 125
                    },
                    {
                        id: 2,
                        name: 'Blue Jean Jacket',
                        image: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                        price: 90
                    },
                    {
                        id: 3,
                        name: 'Grey Jean Jacket',
                        image: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                        price: 90
                    },
                    {
                        id: 4,
                        name: 'Brown Shearling',
                        image: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                        price: 165
                    },
                    {
                        id: 5,
                        name: 'Tan Trench',
                        image: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                        price: 185
                    }
                ]
            },
            {
                id: 4,
                title: 'Womens',
                image: womens,
                routeName: 'womens',
                items: [
                    {
                        id: 1,
                        name: 'Blue Tanktop',
                        image: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                        price: 25
                    },
                    {
                        id: 2,
                        name: 'Floral Blouse',
                        image: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                        price: 20
                    },
                    {
                        id: 3,
                        name: 'Floral Dress',
                        image: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                        price: 80
                    },
                    {
                        id: 4,
                        name: 'Red Dots Dress',
                        image: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                        price: 80
                    },
                    {
                        id: 5,
                        name: 'Striped Sweater',
                        image: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                        price: 45
                    },
                    {
                        id: 6,
                        name: 'Yellow Track Suit',
                        image: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                        price: 135
                    },
                    {
                        id: 7,
                        name: 'White Blouse',
                        image: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                        price: 20
                    }
                ]
            },
            {
                id: 5,
                title: 'Mens',
                image: mens,
                routeName: 'mens',
                items: [
                    {
                        id: 1,
                        name: 'Camo Down Vest',
                        image: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                        price: 325
                    },
                    {
                        id: 2,
                        name: 'Floral T-shirt',
                        image: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                        price: 20
                    },
                    {
                        id: 3,
                        name: 'Black & White Longsleeve',
                        image: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                        price: 25
                    },
                    {
                        id: 4,
                        name: 'Pink T-shirt',
                        image: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                        price: 25
                    },
                    {
                        id: 5,
                        name: 'Jean Long Sleeve',
                        image: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                        price: 40
                    },
                    {
                        id: 6,
                        name: 'Burgundy T-shirt',
                        image: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                        price: 25
                    }
                ]
            }
        ],
        currentUser: null,
        isLoading: true
    }
    //console.log(initialState.sections);
    const [state, dispatch] = useReducer(StoreReducer, initialState);

    //console.log(initialState.shopData);
    return (
        <StoreContext.Provider
            value={
                {
                    sections: initialState.sections,
                    shopData: initialState.shopData,
                    isLoading: initialState.isLoading
                }
            }
        >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreState;