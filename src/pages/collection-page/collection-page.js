import React, { useContext } from 'react';
import './collection-page.scss';

import StoreContext from '../../context/StoreContext';
import Items from '../Items/Items';

const CollectionPage = () => {
    const { shopData } = useContext(StoreContext);
    //console.log(shopData);

    return (
        <div className="collection-page">
            <Items product={shopData} />
        </div>
    )
}

export default CollectionPage;