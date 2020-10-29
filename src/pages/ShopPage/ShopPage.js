import React, { useContext } from 'react';
import './ShopPage.scss';
import StoreContext from '../../context/StoreContext';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = () => {
    const { shopData } = useContext(StoreContext);
    console.log(shopData);
    return (
        <div className="shop-page">
            { shopData.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

export default ShopPage;