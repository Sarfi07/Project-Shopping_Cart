import { describe, it, vi } from 'vitest';
import ShoppingPage from '../components/ShoppingCart';
import { render } from '@testing-library/react';

const cart = [];
const addToCart = vi.fn((product, quantity) => {
  fakeContext.cart.push({ product, quantity });
});
const removeFromCart = vi.fn();
const setCart = vi.fn();

const fakeContext = { cart, addToCart, removeFromCart, setCart };

describe('Shopping Page', () => {
  it('initial Render', () => {
    render(<ShoppingPage context={fakeContext} />);
  });
});
