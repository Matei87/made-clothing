import React from 'react';

import { withRouter, useHistory, Link } from 'react-router-dom';
import { HiOutlineHeart } from "react-icons/hi";
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selector';


const Men = ({ collections }) => {
    console.log(collections[1].items);
    // const { shopData, favorites, addFavorite } = useContext(StoreContext);
    //let history = useHistory();

    // const { items } = shopData[1];
    // //console.log(items);

    // const like = (id) => {
    //     const exist = favorites.find(x => x.id === id);
    //     //console.log(exist);
    //     if (exist) {
    //         return;
    //     }
    //     let likedProduct = items.find(item => item.id === id);
    //     addFavorite([likedProduct, ...favorites]);
    //     localStorage.setItem('favorites', JSON.stringify([likedProduct, ...favorites]));
    //     //console.log(likedProduct, favorites, id);
    // }
    // let favoritesId = favorites.map(x => x.id);
    //console.log(favorites);

    return (
        <div className="collection-page">
            <h2 className="collection-title">Men</h2>
            <div className="collection-items">
                {collections[1].items.map(item => (
                    <div className="collection-item" key={item.id}>
                        <div className="image-wrapper">
                            <Link
                                to={{
                                    pathname: `men/${(item.name).split(' ').join('-').toLowerCase()}`,
                                    state: item
                                }}>
                                <img src={item.image} alt="image"
                                // onClick={() => history.push({
                                //     pathname: `men/${(item.name).split(' ').join('-').toLowerCase()}`,
                                //     state: { item }
                                // })}
                                />
                            </Link>
                        </div>
                        <div className="content-over">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <span
                            // className={favoritesId.find(x => x === item.id) ? 'heart active' : 'heart'}
                            // onClick={() => addItem(item)}
                            ><HiOutlineHeart /></span>
                        </div>
                    </div>
                ))}
            </div>
            {/* <Item key={id} {...otherProps} /> */}

        </div>
    )
}

const mapStateToProps = state => ({
    collections: state.shop.collections
})

export default withRouter(connect(mapStateToProps)(Men));