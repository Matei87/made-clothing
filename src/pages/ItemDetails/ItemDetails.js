import React from 'react';
import './ItemDetails.scss';

import { useHistory, withRouter } from 'react-router-dom';
import { HiArrowLeft, HiOutlineHeart } from "react-icons/hi";
//redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { addFavorite } from '../../redux/favorite/favorite.actions';


const ItemDetails = ({ details, addItem, favorite, addFavorite }) => {
    //const { addItem, cartItems, favorites, addFavorite } = useContext(StoreContext);
    let history = useHistory();
    //console.log(details, history.location.state, addItemsToShop);
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

    console.log(product);
    //console.log(props.match.params, props, history);
    //const { item } = details.location.state;
    const { name, image, price, colour, brand, description } = product[0];

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
    let favoritesId = favorite.map(x => x.id);
    console.log(favorite);

    return (
        <>
            <div className="item-details container">
                <div className="btn btn-primary"
                    onClick={() => history.goBack()}
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
                            <p className="addToCart-svg">
                                <button
                                    className="addToCart btn"
                                    onClick={() => addItem(product[0])}
                                >
                                    Add to cart
                                </button>
                                <span
                                    className={favoritesId.find(x => x === product[0].id) ? 'heart active' : 'heart'}
                                    onClick={() => addFavorite(product[0])}
                                ><HiOutlineHeart /></span>
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
    addItem: item => dispatch(addItem(item)),
    addFavorite: item => dispatch(addFavorite(item))
})

const mapStateToProps = state => ({
    details: state.shop.collections,
    favorite: state.favorite.favoriteItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetails));