import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const[cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product ];
        setCart(newCart);
    } 

    return (
        <div className="shop-container">
            <div className='products-container'>
                {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd}
                        ></Product>) 
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                {/* <h3>This is cart</h3>
                <h4>Order summary : {cart.length} </h4> */}
            </div>
        </div>

    );
};

export default Shop;