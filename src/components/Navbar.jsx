import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/products" activeClassName="active">Products</NavLink>
      <NavLink to="/users" activeClassName="active">Users</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      <FiLogOut className="logout-icon" onClick={onLogout} />
    </nav>
  );
};

export default Navbar;
