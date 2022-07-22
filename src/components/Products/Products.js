import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './products.css';
const Products = ()=> {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(res => {
               console.log(res.data); 
               setProducts(res.data);
        });
    }, [])
    return (
        <div className='products-wrapper'>
            {products.map(product => {
                return (
                    <div className='product-tile' key={product.id}>
                    <div className='product-img'>
                    <img src={product.image}/>
                    </div>
                    <div className='product-name'>{product.title}</div>
                    <div className='product-name'>${product.price}</div>
                    </div>
                );
            })}
        </div>
    );
}
export default Products;    