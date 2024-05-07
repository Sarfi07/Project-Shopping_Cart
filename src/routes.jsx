import App from './App';
import HomePage from './components/HomePage';
import ShoppingPage from './components/ShoppingCart';
import Cart from './components/Cart';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/shop', element: <ShoppingPage /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
];

export default routes;
