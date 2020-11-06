import React, { useReducer, useEffect } from 'react';
import StoreContext from './StoreContext';
import StoreReducer from './StoreReducer';

//PICTURES
import hats from '../img/hats.png';
import jackets from '../img/jackets.png';
import sneakers from '../img/sneakers.png';
import womens from '../img/womens.png';
import mens from '../img/men.png';
//hats
import brownbrim from '../img/brown-brim.png';
import bluebeanie from '../img/blue-beanie.png';
import browncowboy from '../img/brown-cowboy.png';
import greybrim from '../img/grey-brim.png';
import greenbeanie from '../img/green-beanie.png';
import palmtreecap from '../img/palm-tree-cap.png';
import redbeanie from '../img/red-beanie.png';
import wolfcap from '../img/wolf-cap.png';
import bluesnapback from '../img/blue-snapback.png';
//sneakers
import adidasnmd from '../img/adidas-nmd.png';
import yeezy from '../img/yeezy.png';
import blackconverse from '../img/black-converse.png';
import whitenikehightops from '../img/white-nike-high-tops.png';
import nikesred from '../img/nikes-red.png';
import nikebrown from '../img/nike-brown.png';
import nikefunky from '../img/nike-funky.png';
import timberlands from '../img/timberlands.png';
//jackets
import blackshearling from '../img/black-shearling.png';
import bluejeanjacket from '../img/blue-jean-jacket.png';
import greyjeanjacket from '../img/grey-jean-jacket.png';
import brownshearling from '../img/brown-shearling.png';
import browntrench from '../img/brown-trench.png';
//womens
import bluetank from '../img/blue-tank.png';
import floralblouse from '../img/floral-blouse.png';
import floralskirt from '../img/floral-skirt.png';
import redpolkadotdress from '../img/red-polka-dot-dress.png';
import stripedsweater from '../img/striped-sweater.png';
import yellowtracksuit from '../img/yellow-track-suit.png';
import whitevest from '../img/white-vest.png';
//mens
import camovest from '../img/camo-vest.png';
import floralshirt from '../img/floral-shirt.png';
import longsleeve from '../img/long-sleeve.png';
import pinkshirt from '../img/pink-shirt.png';
import rollupjeanshirt from '../img/roll-up-jean-shirt.png';
import polkadotshirt from '../img/polka-dot-shirt.png';


const StoreState = (props) => {
    const favorite = (localStorage.getItem('favorites'));
    console.log(favorite);

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
                        colour: 'Brown',
                        name: 'Brown Brim',
                        image: brownbrim,
                        price: 25
                    },
                    {
                        id: 2,
                        colour: 'Blue',
                        name: 'Blue Beanie',
                        image: bluebeanie,
                        price: 18
                    },
                    {
                        id: 3,
                        colour: 'Brown',
                        name: 'Brown Cowboy',
                        image: browncowboy,
                        price: 35
                    },
                    {
                        id: 4,
                        colour: 'Grey',
                        name: 'Grey Brim',
                        image: greybrim,
                        price: 25
                    },
                    {
                        id: 5,
                        colour: 'Green',
                        name: 'Green Beanie',
                        image: greenbeanie,
                        price: 18
                    },
                    {
                        id: 6,
                        colour: 'Grey',
                        name: 'Palm Tree Cap',
                        image: palmtreecap,
                        price: 14
                    },
                    {
                        id: 7,
                        colour: 'Red',
                        name: 'Red Beanie',
                        image: redbeanie,
                        price: 18
                    },
                    {
                        id: 8,
                        colour: 'Blue',
                        name: 'Wolf Cap',
                        image: wolfcap,
                        price: 14
                    },
                    {
                        id: 9,
                        colour: 'Blue',
                        name: 'Blue Snapback',
                        image: bluesnapback,
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
                        colour: 'Black / White',
                        name: 'Adidas NMD',
                        image: adidasnmd,
                        price: 220
                    },
                    {
                        id: 2,
                        colour: 'Mauve / White',
                        name: 'Adidas Yeezy',
                        image: yeezy,
                        price: 280
                    },
                    {
                        id: 3,
                        colour: 'Black',
                        name: 'Black Converse',
                        image: blackconverse,
                        price: 110
                    },
                    {
                        id: 4,
                        colour: 'White',
                        name: 'Nike White AirForce',
                        image: whitenikehightops,
                        price: 160
                    },
                    {
                        id: 5,
                        colour: 'Red / White',
                        name: 'Nike Red High Tops',
                        image: nikesred,
                        price: 160
                    },
                    {
                        id: 6,
                        colour: 'Brown / White',
                        name: 'Nike Brown High Tops',
                        image: nikebrown,
                        price: 160
                    },
                    {
                        id: 7,
                        colour: 'White / Black',
                        name: 'Air Jordan Limited',
                        image: nikefunky,
                        price: 190
                    },
                    {
                        id: 8,
                        colour: 'Brown',
                        name: 'Timberlands',
                        image: timberlands,
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
                        colour: 'Black',
                        name: 'Black Jean Shearling',
                        image: blackshearling,
                        price: 125
                    },
                    {
                        id: 2,
                        colour: 'Blue',
                        name: 'Blue Jean Jacket',
                        image: bluejeanjacket,
                        price: 90
                    },
                    {
                        id: 3,
                        colour: 'Grey',
                        name: 'Grey Jean Jacket',
                        image: greyjeanjacket,
                        price: 90
                    },
                    {
                        id: 4,
                        colour: 'Brown / White',
                        name: 'Brown Shearling',
                        image: brownshearling,
                        price: 165
                    },
                    {
                        id: 5,
                        colour: 'Brown',
                        name: 'Tan Trench',
                        image: browntrench,
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
                        colour: 'Blue',
                        name: 'Blue Tanktop',
                        image: bluetank,
                        price: 25
                    },
                    {
                        id: 2,
                        colour: 'White / Pink',
                        name: 'Floral Blouse',
                        image: floralblouse,
                        price: 20
                    },
                    {
                        id: 3,
                        colour: 'White / Red',
                        name: 'Floral Dress',
                        image: floralskirt,
                        price: 80
                    },
                    {
                        id: 4,
                        colour: 'Red / White',
                        name: 'Red Dots Dress',
                        image: redpolkadotdress,
                        price: 80
                    },
                    {
                        id: 5,
                        colour: 'White / Brown',
                        name: 'Striped Sweater',
                        image: stripedsweater,
                        price: 45
                    },
                    {
                        id: 6,
                        colour: 'Yellow',
                        name: 'Yellow Track Suit',
                        image: yellowtracksuit,
                        price: 135
                    },
                    {
                        id: 7,
                        colour: 'White',
                        name: 'White Blouse',
                        image: whitevest,
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
                        colour: 'Brown / Green / Black',
                        name: 'Camo Down Vest',
                        image: camovest,
                        price: 325
                    },
                    {
                        id: 2,
                        colour: 'Blue',
                        name: 'Floral T-shirt',
                        image: floralshirt,
                        price: 20
                    },
                    {
                        id: 3,
                        colour: 'Black / White',
                        name: 'Black & White Longsleeve',
                        image: longsleeve,
                        price: 25
                    },
                    {
                        id: 4,
                        colour: 'Pink',
                        name: 'Pink T-shirt',
                        image: pinkshirt,
                        price: 25
                    },
                    {
                        id: 5,
                        colour: 'Blue',
                        name: 'Jean Long Sleeve',
                        image: rollupjeanshirt,
                        price: 40
                    },
                    {
                        id: 6,
                        colour: 'Brown / Black',
                        name: 'Burgundy T-shirt',
                        image: polkadotshirt,
                        price: 25
                    }
                ]
            }
        ],
        currentUser: null,
        isLoading: true,
        favorites: JSON.parse(favorite) || []
    }
    //console.log(initialState.sections);
    const [state, dispatch] = useReducer(StoreReducer, initialState);

    const addFavorite = (favorites) => {
        dispatch({ type: 'ADD_FAVORITE', favorites });
    }

    //console.log(initialState.shopData);
    return (
        <StoreContext.Provider
            value={
                {
                    sections: initialState.sections,
                    shopData: initialState.shopData,
                    isLoading: initialState.isLoading,
                    favorites: initialState.favorites,
                    addFavorite
                }
            }
        >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreState;