import React from 'react';
import './ItemDetails.scss';

import { withRouter, useHistory } from 'react-router-dom';
import { HiArrowLeft, HiOutlineHeart } from "react-icons/hi";


const ItemDetails = (props) => {
    let history = useHistory();
    //console.log(props);
    const { id, name, image, price, colour } = props.location.state.item;
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
                        <div className="addToCart btn">Add to cart</div>
                        <span><HiOutlineHeart /></span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default withRouter(ItemDetails);