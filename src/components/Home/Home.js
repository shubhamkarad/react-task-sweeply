import React from 'react';
import './home.css';
import ProductsStore from '../../assets/productstore.jpg';
const Home = ()=> {
    return (
        <div className='home'>
            <div className='welcome-title'>Welcome to Products buy</div>
            <h1>Exclusive chair gold collection.</h1>
            <button className='click-btn'>Shop Now</button>
            <img src={ProductsStore}/>
        </div>
    );
}
export default Home;