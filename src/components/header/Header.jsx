import { NavLink } from 'react-router-dom';
import './header.css';

function Header({ cartLength }) {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Cart ({cartLength})
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
