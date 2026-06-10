import { Link } from 'react-router-dom';
import './Experience.css';

const cards = [
  { icon: '🪔', title: 'Private Dining', desc: 'Intimate rooms adorned with Aso-oke textiles for family gatherings and celebrations up to 20 guests.', variant: 'tall' },
  { icon: '🎶', title: 'Live Highlife', desc: 'Fridays & Saturdays', variant: '' },
  { icon: '🍃', title: 'Farm-to-Table', desc: '36 partner farms across 6 states', variant: 'dark' },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="exp-content">
        <p className="section-label">The Experience</p>
        <h2 className="section-title">More Than a Meal — <em>A Memory</em></h2>
        <p className="exp-text">
          From the moment you step in, Àdùn wraps you in warmth. Think adire fabric cushions,
          the gentle hum of Afrobeats, the scent of palm oil and uziza drifting from the open
          kitchen. We make dining an occasion.
        </p>
        <Link to="/experience" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>Plan Your Visit</Link>
      </div>

      <div className="exp-visual">
        {cards.map((card) => (
          <div key={card.title} className={`exp-card ${card.variant ? `exp-card--${card.variant}` : ''}`}>
            <div className="exp-card-icon">{card.icon}</div>
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
