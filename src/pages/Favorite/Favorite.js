import React from 'react';

import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, withRouter } from 'react-router-dom';
//redux
import { connect } from 'react-redux';
import { removeFavorite } from '../../redux/favorite/favorite.actions';


const Favorite = ({ favorite, removeFavorite }) => {

    return (<>
        {favorite.length > 0 ?
            <div className="collection-page">
                <h2 className="collection-title">Favorite Items</h2>
                <div className="collection-items">
                    {favorite.map(item => (
                        <div className="collection-item" key={item.id} >
                            <div className="image-wrapper">
                                <Link
                                    to={{
                                        pathname: `${(item.routeName)}/${(item.name).split(' ').join('-').toLowerCase()}`,
                                        state: item
                                    }}>
                                    <img src={item.image} alt="image" />
                                </Link>
                            </div>
                            <div className="content-over">
                                <span>{item.name}</span>
                                <span>${item.price}</span>
                                <span
                                    className="heart"
                                    onClick={() => removeFavorite(item)}
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
            </div>}
    </>);
}

const mapDispatchToProps = dispatch => ({
    removeFavorite: item => dispatch(removeFavorite(item))
})

const mapStateToProps = state => ({
    favorite: state.favorite.favoriteItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorite));