import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const links = [
  { label: 'Story', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Experience', path: '/experience' },
  { label: 'Reserve', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="nav-logo">Àdùn <span>Kitchen</span></Link>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.path}>
            <Link
              to={l.path}
              className={location.pathname === l.path ? 'nav-link--active' : ''}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="nav-cta">Book a Table</Link>
    </nav>
  );
}
