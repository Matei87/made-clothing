import React, { useContext, useEffect } from 'react';
import './ItemDetails.scss';

import { useHistory, withRouter } from 'react-router-dom';
import { HiArrowLeft, HiOutlineHeart } from "react-icons/hi";
import StoreContext from '../../context/StoreContext';


const ItemDetails = (props) => {
    const { addItem, cartItems, favorites, addFavorite } = useContext(StoreContext);

    let history = useHistory();
    //console.log(props.match.params, props, history);
    const { item } = props.location.state;
    const { id, name, image, price, colour } = props.location.state.item;

    console.log(id, cartItems, item);

    const addToCart = (item) => {
        addItem([item, ...cartItems]);
        localStorage.setItem('cartItems', JSON.stringify([item, ...cartItems]));
        console.log(cartItems);
    }
    console.log(cartItems);

    const like = (id) => {
        const exist = favorites.find(x => x.id === id);
        console.log(exist);
        if (exist) {
            return;
        }

        addFavorite([item, ...favorites]);
        localStorage.setItem('favorites', JSON.stringify([item, ...favorites]));
        console.log(favorites, id);
    }
    let favoritesId = favorites.map(x => x.id);
    console.log(favorites, favoritesId, id);

    return (
        <div className="item-details container">
            <div className="btn btn-primary" onClick={() => history.goBack()}><HiArrowLeft /> Back</div>
            <div className="row">
                <div className="col-md-6">
                    <img src={image} alt="image" />
                </div>
                <div className="col-md-6">
                    <h2 className="name">{name}</h2>
                    <p className="price">${price}</p>
                    <p className="colour">COLOUR: <span className="colour-inner">{colour}</span></p>
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
                            onClick={() => addToCart(item)}>
                            Add to cart</button>
                        <span
                            className={favoritesId.find(x => x === item.id) ? 'heart active' : 'heart'}
                            onClick={() => like(id)}
                        ><HiOutlineHeart /></span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default ItemDetails;