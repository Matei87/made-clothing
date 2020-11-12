import React, { useContext } from 'react';
import './Checkout.scss';

import StoreContext from '../../context/StoreContext';

const Checkout = () => {
    const { cartItems } = useContext(StoreContext);
    console.log(cartItems);

    return (
        <div className="container checkout">
            <div className="row">
                <div className="col-md-9 wrapper" >
                    {cartItems ? cartItems.map(item => (
                        <div className="col-md-12" key={item.id} > {console.log(item)}
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
    )
}

export default Checkout;