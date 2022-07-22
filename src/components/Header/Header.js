import { Link } from 'react-router-dom';
import React from 'react';
import styles from './header.module.css';
const Header = ()=> {
    return (
        <React.Fragment>
            <div className={styles.headerWrapper}>
                <div className={styles.logo}>Products buy</div> 
                <div className={styles.header}>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='products'>Products</Link></div>
                <div>Pages</div>
                <div>Blogs</div>
                <div>Contact</div>
                <div className={styles.login}><i className="fa fa-search"></i>Login</div>
                <div><i className="fa fa-shopping-cart"></i>Cart</div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Header;