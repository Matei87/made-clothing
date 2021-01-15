import React from 'react';
import './Women.scss';

import { withRouter, useHistory, Link } from 'react-router-dom';
import { HiOutlineHeart } from "react-icons/hi";
//redux
import { connect } from 'react-redux';
import { addFavorite } from '../../redux/favorite/favorite.actions';


const Women = ({ collections, favorite, addFavorite }) => {
    //console.log(collections);
    //const { shopData, favorites, addFavorite } = useContext(StoreContext);
    // let history = useHistory();
    // console.log(history);
    //const { items } = shopData[0];
    //console.log(favorite);

    // const like = (id) => {
    //     const exist = favorites.find(x => x.id === id);
    //     console.log(exist);
    //     if (exist) {
    //         return;
    //     }
    //     let likedProduct = items.find(item => item.id === id);
    //     addFavorite([likedProduct, ...favorites]);
    //     localStorage.setItem('favorites', JSON.stringify([likedProduct, ...favorites]));

    //     //console.log(likedProduct, favorites, id);
    // }
    let favoritesId = favorite.map(x => x.id);
    //console.log(favoritesId);

    //favoritesId.find(x => x === item.id)
    return (
        <div className="collection-page">
            <h2 className="collection-title">Women</h2>
            <div className="collection-items">
                {collections[0].items.map(item => (
                    <div className="collection-item" key={item.id}>
                        <div className="image-wrapper">
                            <Link
                                to={{
                                    pathname: `women/${(item.name).split(' ').join('-').toLowerCase()}`,
                                    state: item
                                }}>
                                <img src={item.image} alt="image"
                                // onClick={() => history.push({
                                //     pathname: `women/${(item.name).split(' ').join('-').toLowerCase()}`,
                                //     state: { item }
                                // })}
                                />
                            </Link>
                        </div>
                        <div className="content-over">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <span
                                className={favoritesId.find(x => x === item.id) ? 'heart active' : 'heart'}
                                onClick={() => addFavorite(item)}>
                                <HiOutlineHeart /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addFavorite: item => dispatch(addFavorite(item))
})

const mapStateToProps = state => ({
    collections: state.shop.collections,
    favorite: state.favorite.favoriteItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Women));
