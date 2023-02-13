import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);

    return (
        <div className="shop-container">
            <div className='products-container'>
                <h2>This is shop</h2>
                <h2>{products.length}</h2>
                
                {
                    products.map(pd => <Product product={pd}></Product>)
                }
                
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
        </div>

    );
};

export default Shop;