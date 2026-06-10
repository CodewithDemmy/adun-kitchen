import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-label">Lagos · Nigeria · Est. 2019</p>
        <h1 className="hero-title">
          Where <em>Flavour</em> Tells Our Story
        </h1>
        <p className="hero-desc">
          A modern West African dining experience rooted in tradition. From pots simmering
          with egusi to clay-baked suya, every dish carries the soul of our ancestors.
        </p>
        <div className="hero-actions">
          <Link to="/menu" className="btn-primary">Explore Menu</Link>
          <Link to="/about" className="btn-ghost">Our Story</Link>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1567360425618-1594206637d2?w=900&q=80"
          alt="Nigerian cuisine"
          className="hero-img"
        />
        <div className="hero-badge">
          <strong>4.9★</strong>
          <span>Top-rated in Lagos</span>
        </div>
        <div className="hero-pattern" />
      </div>
    </section>
  );
}
