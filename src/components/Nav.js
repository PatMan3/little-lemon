import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/#about' },
    { label: 'Menu', to: '/#menu' },
    { label: 'Reservations', to: '/booking' },
    { label: 'Order Online', to: '/#order-online' },
    { label: 'Login', to: '/#login' },
  ];

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/" className="nav__logo-text">🍋 Little Lemon</Link>
      </div>
      <button
        className="nav__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul className={`nav__list${menuOpen ? ' nav__list--open' : ''}`}>
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="nav__link" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;