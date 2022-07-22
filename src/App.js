import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
const App = () => {
    return (
      <div>
        <Router>
          <Header/>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
          <Route exact path='products' element={< Products />}></Route>
          </Routes>
        </Router>
      </div>
    );
};

export default App;
