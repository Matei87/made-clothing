import React, { useContext } from 'react';
import './Checkout.scss';

import { Link } from 'react-router-dom';
import StoreContext from '../../context/StoreContext';

const Checkout = () => {
    const { cartItems } = useContext(StoreContext);
    // let itemz = JSON.parse(localStorage.getItem('cartItems'));
    // let data = cartItems;
    // let item = cartItems.map(x => x['qty'] = 1)
    // let a = itemz.find(x => x.id)
    // let exist = data.find(ix => ix.id === a.id);
    // if (exist) {
    //     item = cartItems.map(x => x['qty'])
    // }
    // console.log(cartItems, itemz, data, exist);


    return (<>{cartItems.length > 0 ?
        <div className="container checkout">
            <div className="row">
                <div className="col-md-9 wrapper" >
                    {cartItems ? cartItems.map(item => (
                        <div className="col-md-12" key={item.id}>
                            <div className="image-wrapper">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="form-group quantity">
                                <select name="quantity" id="" className="form-control custom-select">
                                    <option value={item.length}>{item.length}</option>
                                </select>&nbsp;
                            <label htmlFor="quantity-select">buc</label>
                            </div>
                            <h2>${item.price}</h2>
                        </div>
                    )) : null}
                </div>

                < div className="col-md-3">
                    <div className="wrapper">
                        <div className="summar">
                            <h3>Summary</h3>
                            <div className="product-cost">
                                <p>Products cost: </p>
                                <span>$123</span>
                            </div>
                            <div className="delivery-cost">
                                <p>Delivery cost: </p>
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="total-cost">
                            <h3>Total: $123</h3>
                            <button className="btn btn-outline-primary btn-block">Continue</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-9">
                    <div className="summar">
                        <h3>Summary</h3>
                        <div className="product-cost">
                            <p>Products cost: </p>
                            <span>$123</span>
                        </div>
                        <div className="delivery-cost">
                            <p>Delivery cost: </p>
                            <span>Free</span>
                        </div>
                    </div>
                    <div className="total-cost">
                        <h3>Total: $123</h3>
                        <button className="btn btn-outline-primary btn-block">Continue</button>
                    </div>
                </div>

            </div>
        </div >
        : <div className="empty-list">
            <h2>Your basket is empty</h2>
            <p>To add products into basket please go back to the shop.</p>
            <Link to="/women" className="btn btn-outline-primary btn-block">Women</Link>
            <Link to="/men" className="btn btn-outline-primary btn-block">Men</Link>
        </div>}</>
    )
}

export default Checkout;