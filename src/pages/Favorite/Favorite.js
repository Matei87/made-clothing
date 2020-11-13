import React, { useContext } from 'react';

import StoreContext from '../../context/StoreContext';
import { RiDeleteBin6Line } from "react-icons/ri";

const Favorite = () => {
    const { favorites, removeFavorite } = useContext(StoreContext);
    console.log(favorites);

    const unlike = (id) => {
        let unlikeProduct = favorites.filter(item => item.id !== id);
        removeFavorite(id)
        localStorage.setItem('favorites', JSON.stringify(unlikeProduct));
        console.log(id, unlikeProduct);
    }

    return (
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
    );
}

export default Favorite;