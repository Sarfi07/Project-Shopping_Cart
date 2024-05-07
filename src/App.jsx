import './App.css';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product, quantity) {
    const newObj = {
      item: product,
      quantity: parseInt(quantity),
    };
    const updatedCart = [...cart, newObj];
    setCart(updatedCart);
    console.log(updatedCart);
  }

  function removeFromCart(product) {
    const productIndex = cart.findIndex((item) => item.item.id === product.id);

    if (productIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);

      setCart(updatedCart);
    } else {
      console.log('Product not found in array');
    }
  }

  const contextValue = { cart, addToCart, removeFromCart, setCart };
  return (
    <>
      <Header cartLength={cart.length} />
      <main>
        <Outlet context={contextValue} />
      </main>
    </>
  );
}

export default App;
