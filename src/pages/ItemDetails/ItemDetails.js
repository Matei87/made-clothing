import React, { useContext, useEffect } from 'react';
import './ItemDetails.scss';

import { useHistory, withRouter } from 'react-router-dom';
import { HiArrowLeft, HiOutlineHeart } from "react-icons/hi";
//import StoreContext from '../../context/StoreContext';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';


const ItemDetails = (item) => {
    //const { addItem, cartItems, favorites, addFavorite } = useContext(StoreContext);

    //let history = useHistory();
    //console.log(props.match.params, props, history);
    //const { item } = props.location.state;
    const { id, name, image, price, colour, brand, description, addItem } = item;

    //console.log(item);

    // const addToCart = (item) => {
    //     addItem([...cartItems, item]);
    //     localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
    //     //console.log(cartItems);
    // }
    //console.log(cartItems);

    // const like = (id) => {
    //     const exist = favorites.find(x => x.id === id);
    //     //console.log(exist);
    //     if (exist) {
    //         return;
    //     }

    //     addFavorite([item, ...favorites]);
    //     localStorage.setItem('favorites', JSON.stringify([item, ...favorites]));
    //     //console.log(favorites, id);
    // }
    // let favoritesId = favorites.map(x => x.id);
    //console.log(favorites, favoritesId, id);

    return (
        <>
            <div className="item-details container">
                <div className="btn btn-primary"
                // onClick={() => history.goBack()}
                ><HiArrowLeft /> Back</div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="image-wrapper">
                            <img src={image} alt="image" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="w-55">
                            <p className="brand">Brand: <span className="brand-inner">{brand}</span></p>
                            <h2 className="name">{name}</h2>
                            <p className="price">Price: <span className="price-inner">${price}</span></p>
                            <p className="colour">Colour: <span className="colour-inner">{colour}</span></p>
                            <div className="form-group quantity">
                                <label htmlFor="quantity-select">Quantity:</label>
                                <select name="quantity" id="quantity-select" className="form-control custom-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <p className="addToCart-svg">
                                <button
                                    className="addToCart btn"
                                    onClick={() => addItem(item)}>
                                    Add to cart
                                </button>
                                {/* <span
                                    className={favoritesId.find(x => x === item.id) ? 'heart active' : 'heart'}
                                    onClick={() => like(id)}
                                ><HiOutlineHeart /></span> */}
                            </p>
                        </div>


                    </div>
                </div>
            </div>

            <div className="item-description container">
                <div className="col-md-7">
                    <h3>Description:</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemDetails);