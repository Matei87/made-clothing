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
    //const { cartItems } = useContext(StoreContext);
    // let itemz = JSON.parse(localStorage.getItem('cartItems'));
    // let data = cartItems;
    // let item = cartItems.map(x => x['qty'] = 1)
    // let a = itemz.find(x => x.id)
    // let exist = data.find(ix => ix.id === a.id);
    // if (exist) {
    //     item = cartItems.map(x => x['qty'])
    // }
    // console.log(cartItems, itemz, data, exist);
    // let items = cartItems.map(item => item.price);
    // let totalPrice = items.reduce((acc, curr) => acc + curr);
    // console.log(totalPrice);

    return (<>
        {cartItems.length > 0 ?
            <div className="container checkout">
                <div className="row">
                    <div className="col-md-9 wrapper" >
                        {cartItems ? cartItems.map(item => (
                            <div className="col-md-12" key={item.id}>
                                <div className="image-wrapper">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="form-group quantity">
                                    <div className="arrow"
                                        onClick={() => removeItem(item)}>&#10094;</div>
                                    <span className="value">{item.quantity}</span>
                                    <div className="arrow"
                                        onClick={() => addItem(item)}>&#10095;</div>
                                    {/* <select name="quantity" id="" className="form-control custom-select">
                                        <option value={item.quantity} selected>{item.quantity}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>&nbsp;
                                    <label htmlFor="quantity-select">buc</label> */}
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


            </div>
            : <div className="empty-list">
                <h2>Your basket is empty</h2>
                <p>To add products into basket please go back to the shop.</p>
                <Link to="/women" className="btn btn-outline-primary btn-block">Women</Link>
                <Link to="/men" className="btn btn-outline-primary btn-block">Men</Link>
            </div>}</>
    )
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