import React, { useContext, useState, useEffect } from 'react';
import './Women.scss';

import { withRouter, useHistory, Link } from 'react-router-dom';
import StoreContext from '../../context/StoreContext';
import { HiOutlineHeart } from "react-icons/hi";


const Women = () => {
    const { shopData, favorites, addFavorite } = useContext(StoreContext);
    let history = useHistory();

    const { items } = shopData[0];
    //console.log(items);


    const like = (id) => {
        let likedProduct = items.find(item => item.id === id);
        addFavorite([likedProduct, ...favorites]);
        localStorage.setItem('favorites', JSON.stringify([likedProduct, ...favorites]));
        console.log(favorites);
    }
    console.log(favorites);


    return (
        <div className="collection-page">
            <h2 className="collection-title">Women</h2>
            <div className="collection-items">
                {items.map(item => (
                    <div className="collection-item" key={item.id}>
                        <div className="image-wrapper">
                            <img src={item.image} alt="image"
                                onClick={() => history.push({
                                    pathname: `women/${(item.name).split(' ').join('-').toLowerCase()}`,
                                    state: { item: item }
                                })}
                            />
                        </div>
                        <div className="content-over">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <span className="heart"
                                onClick={() => like(item.id)}
                            ><HiOutlineHeart /></span>
                        </div>
                    </div>
                ))}
            </div>
            {/* <Item key={id} {...otherProps} /> */}

        </div>
    )
}

export default Women;
