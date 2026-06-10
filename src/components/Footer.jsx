import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
  Explore: [
    { label: 'Menu', path: '/menu' },
    { label: 'Our Story', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ],
  Visit: [
    { label: 'Opening Hours', path: '/experience' },
    { label: 'Location', path: '/contact' },
    { label: 'Private Dining', path: '/experience' },
    { label: 'Catering', path: '/contact' },
  ],
  Connect: [
    { label: 'Instagram', path: 'https://instagram.com' },
    { label: 'Twitter / X', path: 'https://twitter.com' },
    { label: 'WhatsApp', path: 'https://wa.me' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Àdùn <em>Kitchen</em></Link>
          <p>A celebration of West African cuisine, rooted in tradition and elevated for today's table. Lagos Island, Nigeria.</p>
        </div>
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div className="footer-col" key={heading}>
            <h5>{heading}</h5>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  {link.path.startsWith('http') ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer">{link.label}</a>
                  ) : (
                    <Link to={link.path}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div className="footer-bottom">
        <span>© 2026 Àdùn Kitchen. All rights reserved.</span>
        <span>Made with ❤️ in Lagos</span>
      </div>
    </>
  );
}
