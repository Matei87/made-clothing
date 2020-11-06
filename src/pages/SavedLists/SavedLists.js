import React, { useContext } from 'react';

import StoreContext from '../../context/StoreContext';
import { RiDeleteBin6Line } from "react-icons/ri";

const SavedLists = () => {
    const { favorites } = useContext(StoreContext);
    console.log(favorites);

    return (
        <div className="collection-page">
            <h2 className="collection-title">Saved Items</h2>
            <div className="collection-items">
                {favorites.map(item => (
                    <div className="collection-item">
                        <div className="image-wrapper">
                            <img src={item.image} alt="image" />
                        </div>
                        <div className="content-over">
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                            <span className="heart"><RiDeleteBin6Line /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SavedLists;