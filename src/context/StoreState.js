import React, { useReducer, useEffect } from 'react';
import StoreContext from './StoreContext';
import StoreReducer from './StoreReducer';


//hats
import blackhat from '../img/black-hat.png';
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
        shopData: [
            {
                id: 1,
                title: 'Women',
                routeName: 'women',
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
                        colour: 'Green',
                        name: 'Green Beanie',
                        image: greenbeanie,
                        price: 18
                    },
                    {
                        id: 4,
                        colour: 'Red',
                        name: 'Red Beanie',
                        image: redbeanie,
                        price: 18
                    },
                    {
                        id: 5,
                        colour: 'Blue',
                        name: 'Blue Snapback',
                        image: bluesnapback,
                        price: 16
                    },
                    {
                        id: 6,
                        colour: 'Mauve / White',
                        name: 'Adidas Yeezy',
                        image: yeezy,
                        price: 280
                    },
                    {
                        id: 7,
                        colour: 'Grey',
                        name: 'Grey Jean Jacket',
                        image: greyjeanjacket,
                        price: 90
                    },
                    {
                        id: 8,
                        colour: 'Brown',
                        name: 'Tan Trench',
                        image: browntrench,
                        price: 185
                    },
                    {
                        id: 9,
                        colour: 'Blue',
                        name: 'Blue Tanktop',
                        image: bluetank,
                        price: 25
                    },
                    {
                        id: 10,
                        colour: 'White / Pink',
                        name: 'Floral Blouse',
                        image: floralblouse,
                        price: 20
                    },
                    {
                        id: 11,
                        colour: 'White / Red',
                        name: 'Floral Dress',
                        image: floralskirt,
                        price: 80
                    },
                    {
                        id: 12,
                        colour: 'Red / White',
                        name: 'Red Dots Dress',
                        image: redpolkadotdress,
                        price: 80
                    },
                    {
                        id: 13,
                        colour: 'White / Brown',
                        name: 'Striped Sweater',
                        image: stripedsweater,
                        price: 45
                    },
                    {
                        id: 14,
                        colour: 'Yellow',
                        name: 'Yellow Track Suit',
                        image: yellowtracksuit,
                        price: 135
                    },
                    {
                        id: 15,
                        colour: 'White',
                        name: 'White Blouse',
                        image: whitevest,
                        price: 20
                    }
                ]
            },
            {
                id: 2,
                title: 'Men',
                routeName: 'men',
                items: [
                    {
                        id: 1,
                        colour: 'Brown',
                        name: 'Brown Cowboy',
                        image: browncowboy,
                        price: 35
                    },
                    {
                        id: 2,
                        colour: 'Grey',
                        name: 'Grey Brim',
                        image: greybrim,
                        price: 25
                    },
                    {
                        id: 3,
                        colour: 'Grey',
                        name: 'Palm Tree Cap',
                        image: palmtreecap,
                        price: 14
                    },
                    {
                        id: 4,
                        colour: 'Blue',
                        name: 'Wolf Cap',
                        image: wolfcap,
                        price: 14
                    },
                    {
                        id: 5,
                        colour: 'Black',
                        name: 'Black Cap',
                        image: blackhat,
                        price: 20
                    },
                    {
                        id: 6,
                        colour: 'Black / White',
                        name: 'Adidas NMD',
                        image: adidasnmd,
                        price: 220
                    },
                    {
                        id: 7,
                        colour: 'Black',
                        name: 'Black Converse',
                        image: blackconverse,
                        price: 110
                    },
                    {
                        id: 8,
                        colour: 'White',
                        name: 'Nike White AirForce',
                        image: whitenikehightops,
                        price: 160
                    },
                    {
                        id: 9,
                        colour: 'Red / White',
                        name: 'Nike Red High Tops',
                        image: nikesred,
                        price: 160
                    },
                    {
                        id: 10,
                        colour: 'Brown / White',
                        name: 'Nike Brown High Tops',
                        image: nikebrown,
                        price: 160
                    },
                    {
                        id: 11,
                        colour: 'White / Black',
                        name: 'Air Jordan Limited',
                        image: nikefunky,
                        price: 190
                    },
                    {
                        id: 12,
                        colour: 'Brown',
                        name: 'Timberlands',
                        image: timberlands,
                        price: 200
                    },
                    {
                        id: 13,
                        colour: 'Black',
                        name: 'Black Jean Shearling',
                        image: blackshearling,
                        price: 125
                    },
                    {
                        id: 14,
                        colour: 'Blue',
                        name: 'Blue Jean Jacket',
                        image: bluejeanjacket,
                        price: 90
                    },
                    {
                        id: 15,
                        colour: 'Brown / White',
                        name: 'Brown Shearling',
                        image: brownshearling,
                        price: 165
                    },


                    {
                        id: 16,
                        colour: 'Brown / Green / Black',
                        name: 'Camo Down Vest',
                        image: camovest,
                        price: 325
                    },
                    {
                        id: 17,
                        colour: 'Blue',
                        name: 'Floral T-shirt',
                        image: floralshirt,
                        price: 20
                    },
                    {
                        id: 18,
                        colour: 'Black / White',
                        name: 'Black & White Longsleeve',
                        image: longsleeve,
                        price: 25
                    },
                    {
                        id: 19,
                        colour: 'Pink',
                        name: 'Pink T-shirt',
                        image: pinkshirt,
                        price: 25
                    },
                    {
                        id: 20,
                        colour: 'Blue',
                        name: 'Jean Long Sleeve',
                        image: rollupjeanshirt,
                        price: 40
                    },
                    {
                        id: 21,
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
    const [state, dispatch] = useReducer(StoreReducer, initialState);

    const addFavorite = (favorites) => {
        dispatch({ type: 'ADD_FAVORITE', payload: favorites });
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

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