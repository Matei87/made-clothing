import React, { useContext, useState, useEffect } from 'react';
import './Women.scss';

import { withRouter, useHistory, Link } from 'react-router-dom';
import StoreContext from '../../context/StoreContext';
import { HiOutlineHeart } from "react-icons/hi";


const Women = () => {
    const { shopData, favorites, addFavorite } = useContext(StoreContext);
    const [saved, setSaved] = useState([]);
    let history = useHistory();

    console.log(shopData[0]);
    const { items } = shopData[0];
    console.log(items);


    const like = (id) => {
        let likedProduct = items.find(item => item.id === id);
        setSaved([likedProduct, ...saved]);
        addFavorite([likedProduct, ...saved]);
        console.log(saved, favorites);
    }
    useEffect(() => {
        let local = localStorage.getItem('favorites');
        if (local) {
            //addFavorite(JSON.parse(local));
            setSaved(JSON.parse(local));
        }
        console.log(favorites);
    }, []);

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

export default withRouter(Women);
