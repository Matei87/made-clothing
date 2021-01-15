import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../img/logo1.png';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I9wEhDMSs9qGgkeV2VKqPNgeLJFK9jsPxI5I7f84c1ntL0Ouvw3pjrAK9yGHYNvS4Kj6GmZ8RR0tydqIrRV17Yz004PsWcIUQ';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
            token={onToken}
            stripeKey={publishableKey}
            name="Made Clothing Co."
            image={Logo}
            label="Pay Now"
            shippingAddress
            billingAddress={true}
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
        >
            <button className="btn btn-outline-primary btn-block">Pay</button>
        </StripeCheckout>
    )
}

export default StripeCheckoutButton;