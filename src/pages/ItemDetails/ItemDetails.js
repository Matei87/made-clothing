import React from 'react';
import './ItemDetails.scss';

import { useHistory, withRouter } from 'react-router-dom';
import { HiArrowLeft, HiOutlineHeart } from "react-icons/hi";
//redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { addFavorite } from '../../redux/favorite/favorite.actions';


const ItemDetails = ({ addItem, favorite, addFavorite, location }) => {

    let history = useHistory();

<<<<<<< HEAD
    const { name, image, price, color, brand, description } = location.state;
=======
    const { name, image, price, colour, brand, description } = location.state;
>>>>>>> f575a61117d5e7d504d238b84ca4dd5dade11ef3
    let favoritesId = favorite.map(x => x.id);


    return (
        <>
            <div className="item-details container">

                <div className="row">

                    <div className="col-sm-10 col-md-12 col-lg-10">
                        <div className="btn btn-primary"
                            onClick={() => history.goBack()}>
                            <HiArrowLeft /> Back</div>
                    </div>

                    <div className="col-sm-10 col-md-6 col-lg-5">
                        <div className="image-wrapper">
<<<<<<< HEAD
                            <img src={image} alt="itemDetails" />
=======
                            <img src={image} alt="image" />
>>>>>>> f575a61117d5e7d504d238b84ca4dd5dade11ef3
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-5">

                        <div className="w-70">
                            <p className="brand">Brand: <span className="brand-inner">{brand}</span></p>
                            <h2 className="name">{name}</h2>
                            <p className="price">Price: <span className="price-inner">${price}</span></p>
<<<<<<< HEAD
                            <p className="colour">Color: <span className="colour-inner">{color}</span></p>
=======
                            <p className="colour">Colour: <span className="colour-inner">{colour}</span></p>
>>>>>>> f575a61117d5e7d504d238b84ca4dd5dade11ef3
                            <p className="addToCart-svg">
                                <button
                                    className="addToCart btn"
                                    onClick={() => addItem(location.state)}>
                                    Add to cart
                             </button>
                                <span
                                    className={favoritesId.find(x => x === location.state.id) ? 'heart active' : 'heart'}
                                    onClick={() => addFavorite(location.state)}
                                ><HiOutlineHeart /></span>
                            </p>
                        </div>

                        <div>
                            <h3>Description:</h3>
                            <p className="m-0">{description}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    addFavorite: item => dispatch(addFavorite(item))
})

const mapStateToProps = state => ({
    favorite: state.favorite.favoriteItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetails));