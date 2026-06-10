import { Link } from 'react-router-dom';
import './About.css';

const stats = [
  { value: '12+', label: 'Years of recipes' },
  { value: '36', label: 'Local farmers' },
  { value: '5★', label: 'Lagos dining award' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80"
          alt="Chef preparing Nigerian food"
          className="about-img"
        />
      </div>
      <div className="about-content">
        <p className="section-label">Our Philosophy</p>
        <h2 className="section-title">
          Rooted in Culture, <em>Refined by Craft</em>
        </h2>
        <p className="about-text">
          Àdùn — meaning "sweetness" in Yoruba — is our promise to you. We source from
          Nigerian farms, partner with local spice artisans, and honour recipes passed
          down through generations. Our kitchen merges the communal warmth of traditional
          cooking with the artistry of contemporary cuisine.
        </p>
        <p className="about-text">Every ingredient tells a story. Every meal is a homecoming.</p>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <Link to="/about" className="btn-primary" style={{ display: 'inline-block', marginTop: '2rem', textDecoration: 'none' }}>Read Full Story</Link>
      </div>
    </section>
  );
}
