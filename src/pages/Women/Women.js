import React from 'react';
import './Women.scss';

import { withRouter, Link } from 'react-router-dom';
import { HiOutlineHeart } from "react-icons/hi";
//redux
import { connect } from 'react-redux';
import { addFavorite } from '../../redux/favorite/favorite.actions';


const Women = ({ collections, favorite, addFavorite }) => {

    let favoritesId = favorite.map(x => x.id);

    return (
        <div className="collection-page">
            <h2 className="collection-title">Women</h2>
            <div className="collection-items">
                {collections.items.map(item => (
                    <div className="collection-item" key={item.id}>
                        <div className="image-wrapper">
                            <Link
                                to={{
                                    pathname: `women/${(item.name).split(' ').join('-').toLowerCase()}`,
                                    state: item
                                }}>
<<<<<<< HEAD
                                <img src={item.image} alt="women" />
=======
                                <img src={item.image} alt="image" />
>>>>>>> f575a61117d5e7d504d238b84ca4dd5dade11ef3
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
    collections: state.shop.collections[0],
    favorite: state.favorite.favoriteItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Women));
