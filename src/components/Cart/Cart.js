import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    
    let total = 0;
    let totalQuantity = 0;

    // const total = cart.reduce((previous, product) => previous + product.price, 0 )
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
    }

    const shipping = cart.length;
    const tax = (total + shipping) * 10;
    const grandTotal = total + tax;

    return (
        <div>
            <h2 className='order-summary'>Order Summary</h2>
            <h5>Items Orders: {totalQuantity}</h5>
            <br />
            <p>Shipping: {shipping}</p>
            <p>Total: {total.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: { grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;