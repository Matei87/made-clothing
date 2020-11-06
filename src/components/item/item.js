import React, { useContext, useEffect, useState } from 'react';
import './item.scss';

import { withRouter, useHistory, Link } from 'react-router-dom';
import { HiOutlineHeart } from "react-icons/hi";
import StoreContext from '../../context/StoreContext';

const Item = (props) => {
    const { favorites, addFavorite } = useContext(StoreContext);
    const [saved, setSaved] = useState([]);
    let history = useHistory();
    const { items, title } = props;

    const like = (id) => {
        let likedProduct = items.find(item => item.id === id);
        //console.log(likedProduct);
        addFavorite([...saved, likedProduct]);
        setSaved([likedProduct, ...saved]);

        console.log(saved, favorites);
    }
    useEffect(() => {
        let local = localStorage.getItem('favorites');
        if (local) {
            addFavorite(JSON.parse(local))
            setSaved(JSON.parse(local));

        }
        console.log(favorites);
    }, []);

    console.log(favorites);
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(saved));
        console.log(saved, favorites);
    });




    return (
        <>
            <h2 className="collection-title">{title}</h2>
            <div className="collection-items">
                {items.map(item => (
                    <div className="collection-item" key={item.id}>
                        <div className="image-wrapper">
                            <img src={item.image} alt="image"
                                onClick={() => history.push({
                                    pathname: `${title.toLowerCase()}/${(item.name).split(' ').join('-').toLowerCase()}`,
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
        </>
    )
}

export default withRouter(Item);