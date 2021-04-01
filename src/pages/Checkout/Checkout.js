import React from 'react';
import './Checkout.scss';

import { Link } from 'react-router-dom';
//redux
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';
//stripe
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';


const Checkout = ({ cartItems, total, clearItem, addItem, removeItem }) => {

    return (<>
        <div className="container checkout">
            <h2 className="checkout-title">Basket Items</h2>

            {cartItems.length > 0 ? <> <div className="row">
                <div className="col-md-9 wrapper" >
                    {cartItems ? cartItems.map(item => (
                        <div className="col-md-12" key={item.id}>
                            <Link
                                to={{
                                    pathname: `${item.routeName}/${(item.name).split(' ').join('-').toLowerCase()}`,
                                    state: item
                                }}>
                                <div className="image-wrapper">
                                    <img src={item.image} alt="checkout" />
                                </div>
                                <div className="content-over">
                                    <span>{item.name}</span>
                                </div>
                            </Link>

                            <div className="form-group quantity">
                                <div className="arrow"
                                    onClick={() => removeItem(item)}>&#10094;</div>
                                <span className="value">{item.quantity}</span>
                                <div className="arrow"
                                    onClick={() => addItem(item)}>&#10095;</div>
                            </div>
                            <div className="price-remove">
                                <h2>${item.price}</h2>
                                <button className="btn btn-primary" onClick={() => clearItem(item)}>Remove</button>
                            </div>

                        </div>
                    )) : null}
                </div>

                <div className="col-md-9">
                    <div className="summar">
                        <h3>Summary</h3>
                        <div className="product-cost">
                            <p>Products cost: </p>
                            <span>${total}</span>
                        </div>
                        <div className="delivery-cost">
                            <p>Delivery cost: </p>
                            <span>Free</span>
                        </div>
                    </div>
                    <div className="total-cost">
                        <h3>Total: ${total}</h3>
                        <StripeCheckoutButton price={total} />
                    </div>
                </div>
            </div>

                <div className="col-md-9">
                    <div className='test-warning'>
                        *Please use the following test credit card for payments*
                         <br />
                         4242 4242 4242 4242 - Exp: 12/21 - CVV: 123
                    </div>
                </div>

            </> : <div className="empty-list">
                <h2>Your basket is empty</h2>
                <p>To add products into basket please go back to the shop.</p>
                <div className="redirect">
                    <Link to="/women" className="btn btn-outline-primary">Women</Link>
                    <Link to="/men" className="btn btn-outline-primary">Men</Link>
                </div>
            </div>}
        </div >
    </>)
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);