import { Link } from 'react-router-dom';
import './PageStyles.css';

const highlights = [
  { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', title: 'Fine Dining', desc: 'Our main dining hall seats 60 guests in an atmosphere of warm earth tones, adire fabrics, and ambient candlelight.' },
  { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', title: 'Private Rooms', desc: 'Three intimate private rooms available for celebrations, corporate dinners, and family milestones.' },
  { img: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80', title: 'Open Kitchen', desc: 'Watch our chefs work their magic from the open kitchen bar — a front-row seat to Nigerian culinary artistry.' },
];

const events = [
  { day: 'Every Friday', title: 'Live Highlife Night', desc: 'Authentic highlife and Afrobeats performed live by rotating Lagos bands.' },
  { day: 'Every Saturday', title: 'Chef\'s Table Experience', desc: 'An exclusive 7-course tasting menu guided by Chef Adaeze herself. Limited to 8 seats.' },
  { day: 'Last Sunday', title: 'Sunday Owambe Brunch', desc: 'A festive family brunch with a live DJ, aso-ebi photo booth, and unlimited zobo.' },
];

export default function ExperiencePage() {
  return (
    <div className="page">
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="page-hero-label">The Atmosphere</p>
          <h1 className="page-hero-title">The <em>Experience</em></h1>
        </div>
      </div>

      {/* Spaces */}
      <section className="page-section">
        <div className="section-center">
          <p className="section-label">Our Spaces</p>
          <h2 className="section-title">Designed for <em>Memories</em></h2>
        </div>
        <div className="highlights-grid">
          {highlights.map((h) => (
            <div className="highlight-card" key={h.title}>
              <div className="highlight-img">
                <img src={h.img} alt={h.title} />
              </div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="page-section events-section">
        <div className="section-center">
          <p className="section-label">What's On</p>
          <h2 className="section-title">Regular <em>Events</em></h2>
        </div>
        <div className="events-list">
          {events.map((e) => (
            <div className="event-row" key={e.title}>
              <span className="event-day">{e.day}</span>
              <div className="event-info">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
              <Link to="/contact" className="btn-ghost" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>Reserve</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Hours */}
      <section className="page-section hours-section">
        <div className="hours-content">
          <p className="section-label">Opening Hours</p>
          <h2 className="section-title">We're Open <em>6 Days a Week</em></h2>
          <div className="hours-grid">
            {[
              { day: 'Monday', time: 'Closed' },
              { day: 'Tuesday – Thursday', time: '12:00 PM – 10:00 PM' },
              { day: 'Friday', time: '12:00 PM – 12:00 AM' },
              { day: 'Saturday', time: '11:00 AM – 12:00 AM' },
              { day: 'Sunday', time: '11:00 AM – 8:00 PM' },
            ].map((h) => (
              <div className="hour-row" key={h.day}>
                <span>{h.day}</span>
                <span className={h.time === 'Closed' ? 'closed' : ''}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hours-img">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80" alt="Restaurant interior" />
        </div>
      </section>

      <section className="page-cta">
        <h2>Plan Your Visit</h2>
        <p>Book a table and let us take care of the rest.</p>
        <Link to="/contact" className="btn-primary">Book a Table</Link>
      </section>
    </div>
  );
}
