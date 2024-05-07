import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';

import App from '../App';
import { BrowserRouter } from 'react-router-dom';
// import { createContext, useReducer } from 'react';
// import userEvent from '@testing-library/user-event';
// import { MemoryRouter, Routes, Route } from 'react-router-dom';
// import HomePage from '../components/HomePage';
// import ShoppingPage from '../components/ShoppingCart';
// import Cart from '../components/Cart';

// const CartContext = createContext();
// // const renderWithContext = (contextValue, initialPath = '/') => {
// //   return render(
// //     <MemoryRouter initialEntries={[initialPath]}>
// //       <CartContext.Provider value={contextValue}>
// //         <Routes>
// //           <Route path="/" element={<App />}>
// //             <Route index element={<HomePage />} />
// //             <Route path="/shop" element={<ShoppingPage />} />
// //             <Route path="/cart" element={<Cart />} />
// //           </Route>
// //         </Routes>
// //       </CartContext.Provider>
// //     </MemoryRouter>,
// //   );
// // };

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

const cart = [];
const addToCart = vi.fn((product, quantity) => {
  fakeContext.cart.push({ product, quantity });
});
const removeFromCart = vi.fn();
const setCart = vi.fn();

// const proudct = {
//   product: {
//     id: 1,
//     item: 'Laptop',
//     price: 110,
//   },
//   quantity: 1,
// };

const fakeContext = { cart, addToCart, removeFromCart, setCart };

describe('App Components Tests', () => {
  it('should components', async () => {
    const { container } = renderWithRouter(<App context={fakeContext} />);

    expect(container).toMatchSnapshot();
  });

  // it('Add to Cart', async () => {
  //   const user = userEvent.setup();

  //   renderWithContext(fakeContext, '/shop');

  //   const addToCartBtn = screen.getByText(/Add to Cart/i);
  //   await user.click(addToCartBtn);

  //   expect(fakeContext.cart.length).toBe(1);
  // });
});
