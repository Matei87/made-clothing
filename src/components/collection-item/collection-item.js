import React, { useContext } from 'react';
import './collection-item.scss';

import StoreContext from '../../context/StoreContext';

const CollectionItem = ({ id, name, price, image }) => {
    const { ShopData } = useContext(StoreContext);

    return (
        <div className="collection-item">
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="image" />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;