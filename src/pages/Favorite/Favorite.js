import React, { useContext } from 'react';

import StoreContext from '../../context/StoreContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Favorite = () => {
    const { favorites, removeFavorite } = useContext(StoreContext);
    //console.log(favorites);

    const unlike = (id) => {
        let unlikeProduct = favorites.filter(item => item.id !== id);
        removeFavorite(id)
        localStorage.setItem('favorites', JSON.stringify(unlikeProduct));
        //console.log(id, unlikeProduct);
    }

    return (<>{favorites.length > 0 ?
        <div className="collection-page">
            <h2 className="collection-title">Favorite Items</h2>
            <div className="collection-items">
                {favorites.map(item => (
                    <div className="collection-item" key={item.id} >
                        <div className="image-wrapper">
                            <img src={item.image} alt="image" />
                        </div>
                        <div className="content-over">
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                            <span
                                className="heart"
                                onClick={() => unlike(item.id)}
                            ><RiDeleteBin6Line /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        : <div className="empty-list">
            <h2>You don`t have favorite items</h2>
            <p>To add products to favorite please go back to the shop.</p>
            <Link to="/women" className="btn btn-outline-primary btn-block">Women</Link>
            <Link to="/men" className="btn btn-outline-primary btn-block">Men</Link>
        </div>}</>
    );
}

export default Favorite;