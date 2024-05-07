import { useOutletContext } from 'react-router-dom';
import Card from './card/Card';
import { useEffect, useState } from 'react';

function Cart() {
  const { cart, addToCart, removeFromCart } = useOutletContext();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((sum, product) => {
      return sum + product.item.price * product.quantity;
    }, 0);
    setTotalAmount(newTotal);
  }, [cart]);

  return (
    <>
      <>
        {cart.map((product) => {
          return (
            <Card
              key={product.item.id}
              product={product.item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
              showQuantityDiv={false}
              quantityC={product.quantity}
            />
          );
        })}
      </>

      <p className="totalAmount">Total Amount payable: {totalAmount}</p>
      <button onClick={proceedToPay} className="payBtn">
        Proceed to Pay
      </button>
    </>
  );
}

function proceedToPay() {
  alert('Thanks you for Shopping with us!');
}

export default Cart;
