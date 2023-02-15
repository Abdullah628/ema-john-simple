import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ('./Product.css');

const Product = (props) => {
    //console.log(props);
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className='products'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <br/>
                <p><small>by : {seller}</small></p> 
                <h4> ${price}</h4>
                
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button 
                className='add-to-cart-btn'
                onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>

    );
};

export default Product;