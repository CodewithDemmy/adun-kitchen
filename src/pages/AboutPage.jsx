import { Link } from 'react-router-dom';
import './PageStyles.css';

const team = [
  { name: 'Chef Adaeze Obi', role: 'Head Chef & Founder', img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80' },
  { name: 'Emeka Nwosu', role: 'Sous Chef', img: 'https://images.unsplash.com/photo-1583394293214-0b3a7f6e0e01?w=400&q=80' },
  { name: 'Amina Bello', role: 'Pastry & Drinks', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80' },
];

export default function AboutPage() {
  return (
    <div className="page">
      {/* Page Hero */}
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1400&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="page-hero-label">Our Story</p>
          <h1 className="page-hero-title">Born from <em>Tradition</em></h1>
        </div>
      </div>

      {/* Story Section */}
      <section className="page-section two-col">
        <div>
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">Àdùn — <em>Sweetness</em> in Every Bite</h2>
          <p className="body-text">Founded in 2019 by Chef Adaeze Obi, Àdùn Kitchen began as a small supper club in Lagos Island, where friends and strangers gathered around clay pots and shared stories. What started as a passion project quickly grew into one of Lagos's most celebrated dining destinations.</p>
          <p className="body-text">We source directly from 36 smallholder farms across six states — Oyo, Enugu, Delta, Kano, Cross River, and Benue — ensuring every ingredient that enters our kitchen is fresh, traceable, and fairly traded.</p>
          <p className="body-text">Our philosophy is simple: honour the recipe, respect the farmer, celebrate the culture.</p>
        </div>
        <div className="about-img-stack">
          <img src="https://images.unsplash.com/photo-1567360425618-1594206637d2?w=600&q=80" alt="Nigerian food spread" className="stack-img stack-img--top" />
          <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80" alt="Chef cooking" className="stack-img stack-img--bottom" />
        </div>
      </section>

      {/* Values */}
      <section className="page-section values-section">
        <div className="values-header">
          <p className="section-label">What Drives Us</p>
          <h2 className="section-title">Our <em>Core Values</em></h2>
        </div>
        <div className="values-grid">
          {[
            { icon: '🌾', title: 'Farm to Table', desc: 'Every ingredient is sourced directly from Nigerian farms we know by name.' },
            { icon: '📖', title: 'Heritage First', desc: 'We cook from handwritten recipe books passed down through three generations.' },
            { icon: '🤝', title: 'Community', desc: 'We employ locally, train young chefs, and give back to our neighbourhood.' },
            { icon: '✨', title: 'Excellence', desc: 'Every plate that leaves our kitchen must carry the full weight of our culture.' },
          ].map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="page-section">
        <div className="section-center">
          <p className="section-label">The People</p>
          <h2 className="section-title">Meet the <em>Team</em></h2>
        </div>
        <div className="team-grid">
          {team.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-img-wrap">
                <img src={m.img} alt={m.name} />
              </div>
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <h2>Ready to Experience Àdùn?</h2>
        <p>Come dine with us. Every table is a celebration.</p>
        <Link to="/contact" className="btn-primary">Book a Table</Link>
      </section>
    </div>
  );
}
