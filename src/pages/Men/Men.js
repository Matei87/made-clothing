import React, { useContext, useState, useEffect } from 'react';

import { withRouter, useHistory, Link } from 'react-router-dom';
import StoreContext from '../../context/StoreContext';
import { HiOutlineHeart } from "react-icons/hi";


const Men = () => {
    const { shopData, favorites, addFavorite } = useContext(StoreContext);
    let history = useHistory();

    const { items } = shopData[1];
    //console.log(items);

    const like = (id) => {
        const exist = favorites.find(x => x.id === id);
        console.log(exist);
        if (exist) {
            return;
        }
        let likedProduct = items.find(item => item.id === id);
        addFavorite([likedProduct, ...favorites]);
        localStorage.setItem('favorites', JSON.stringify([likedProduct, ...favorites]));
        console.log(likedProduct, favorites, id);
    }
    let favoritesId = favorites.map(x => x.id);
    console.log(favorites);

    return (
        <div className="collection-page">
            <h2 className="collection-title">Men</h2>
            <div className="collection-items">
                {items.map(item => (
                    <div className="collection-item" key={item.id}>
                        <div className="image-wrapper">
                            <img src={item.image} alt="image"
                                onClick={() => history.push({
                                    pathname: `men/${(item.name).split(' ').join('-').toLowerCase()}`,
                                    state: { item: item }
                                })}
                            />
                        </div>
                        <div className="content-over">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <span
                                className={favoritesId.find(x => x === item.id) ? 'heart active' : 'heart'}
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

export default Men;
