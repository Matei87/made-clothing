import React from 'react';
import './ItemDetails.scss';

import { useHistory, withRouter } from 'react-router-dom';
import { HiArrowLeft, HiOutlineHeart } from "react-icons/hi";
//redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { addFavorite } from '../../redux/favorite/favorite.actions';


const ItemDetails = ({ details, addItem, favorite, addFavorite }) => {
    let history = useHistory();
    let product = [];
    let findId = () => {
        let historyId = history.location.state.id;

        return details.find(item => {
            for (let i in item.items) {
                if (item.items[i].id === historyId) {
                    product.push(item.items[i]);
                }
            }
        })
    }
    findId();

    const { name, image, price, colour, brand, description } = product[0];

    let favoritesId = favorite.map(x => x.id);
    console.log(favorite);

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
                            <img src={image} alt="image" />
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-5">

                        <div className="w-70">
                            <p className="brand">Brand: <span className="brand-inner">{brand}</span></p>
                            <h2 className="name">{name}</h2>
                            <p className="price">Price: <span className="price-inner">${price}</span></p>
                            <p className="colour">Colour: <span className="colour-inner">{colour}</span></p>
                            <p className="addToCart-svg">
                                <button
                                    className="addToCart btn"
                                    onClick={() => addItem(product[0])}>
                                    Add to cart
                             </button>
                                <span
                                    className={favoritesId.find(x => x === product[0].id) ? 'heart active' : 'heart'}
                                    onClick={() => addFavorite(product[0])}
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
    details: state.shop.collections,
    favorite: state.favorite.favoriteItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetails));