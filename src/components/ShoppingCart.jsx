import { useState, useEffect } from 'react';
import Card from './card/Card.jsx';
import { Link, useOutletContext } from 'react-router-dom';

function ShoppingPage() {
  const { cart, addToCart, removeFromCart, setCart } = useOutletContext();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((err) => setError(err));
  }, []);

  if (!products) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error} </div>;
  }

  return (
    <>
      <Link to="/cart" className="checkoutLink">
        Proceed to Checkout
      </Link>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </>
  );
}

export default ShoppingPage;
