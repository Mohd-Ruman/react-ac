import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React,{useState} from 'react';

function App() {
  const productList = [
    {
      price : 14000,
      name : "hp pavillion",
      quantity : 0
    },
    {
      price : 34000,
      name : "lenovo thinkpad l380",
      quantity : 0
    }
  ]

  let [productListHook , setProductList] = useState(0);

  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList productList={productList}/>
    </main>
    </>
  );
}

export default App;
