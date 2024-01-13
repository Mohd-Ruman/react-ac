import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList';

function App() {
  const productList = [
    {
      price : 14000,
      name : "hp pavillion",
      quantity : 2
    },
    {
      price : 34000,
      name : "lenovo thinkpad l380",
      quantity : 1
    }
  ]
  return (
    <>
    <Navbar/>
    <ProductList productList={productList}/>
    </>
  );
}

export default App;
