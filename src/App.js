import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './component/Product';

function App() {

  return (
    <div className="App">
      <h1>Welcome to ecommerce</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
