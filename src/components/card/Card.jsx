import { useState } from 'react';
import './card.css';

function Card({
  product,
  addToCart,
  removeFromCart,
  cart,
  showQuantityDiv = true,
  quantityC,
}) {
  const isInCart = cart.some((item) => item.item.id === product.id);
  const { title, category, price, rating, image } = product;
  const [quantity, setQuantity] = useState(0);

  function handleQuantityChange(e) {
    const value = e.target.value;
    const max = 100;
    const min = 0;

    if (value >= min && value <= max) {
      setQuantity(value);
    }
  }

  function incrementQty() {
    const newQty = quantity + 1;
    if (newQty < 99) {
      setQuantity(newQty);
    }
  }

  function decrementQty() {
    const newQty = quantity - 1;
    if (newQty >= 0) {
      setQuantity(newQty);
    }
  }

  return (
    <div className="card">
      <p className="category">{category || 'unknown category'}</p>
      <div className="imgContainer">
        {image ? (
          <img src={image} alt="Product image" />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <p className="title">{title || 'untitled product'}</p>
      {rating && (
        <p className="rating">{/* {rating.rate} `({rating.count})` */}</p>
      )}
      <p className="price">{price || 'Price not available'}</p>
      <div className="cartBtnContainer">
        {!isInCart ? (
          <button onClick={() => addToCart(product, quantity)}>
            Add to Cart
          </button>
        ) : (
          <button onClick={() => removeFromCart(product)}>
            Remove from Cart
          </button>
        )}
      </div>
      {showQuantityDiv ? (
        <div className="quantityContainer">
          <button onClick={decrementQty}>-</button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            max={100}
            min={0}
          />
          <button onClick={incrementQty}>+</button>
        </div>
      ) : (
        <div className="quantityContainer">Quantity: {quantityC}</div>
      )}
    </div>
  );
}

export default Card;
