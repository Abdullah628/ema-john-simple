import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const totalPrice = cart[i];
        total = total + totalPrice.price;
        
    }
    let shippingCost = 0;
    if(total>50 && total<100) {
        shippingCost = 6.48;
    }
    else if(total>100 && total<300){
        shippingCost=31.32;
    }
    else if(total>300){
        shippingCost = 39.236;
    }
    else{
        shippingCost = 0;
    }

    const vatTax = total*6/100;

    const totalPrice = total+shippingCost+vatTax;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return(Number(precision));
    }
    
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Item Order: {cart.length}</p>

            <p>Product Price: {formatNumber(total)} </p>

            <p>Shipping Cost: {formatNumber(shippingCost)} </p>

            <p>Tax + VAT: {formatNumber(vatTax)}</p>

            <p>Total Price: {formatNumber(totalPrice)} </p>
        </div>
    );
};

export default Cart;