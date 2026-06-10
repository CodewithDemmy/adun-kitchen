import { useState } from 'react';
import './PageStyles.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (form.name && form.email && form.date) {
      setSubmitted(true);
    }
  };

  return (
    <div className="page">
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1400&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="page-hero-label">Get in Touch</p>
          <h1 className="page-hero-title">Book a <em>Table</em></h1>
        </div>
      </div>

      <section className="page-section contact-section">
        {/* Info Side */}
        <div className="contact-info">
          <p className="section-label">Visit Us</p>
          <h2 className="section-title">We'd Love to <em>Host You</em></h2>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>14 Awolowo Road, Ikoyi<br />Lagos Island, Lagos State</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>+234 801 234 5678</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>hello@adunkitchen.com</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">🕐</span>
              <div>
                <strong>Hours</strong>
                <p>Tue–Thu: 12PM – 10PM<br />Fri–Sat: 12PM – 12AM<br />Sun: 11AM – 8PM</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80" alt="Lagos map area" />
          </div>
        </div>

        {/* Form Side */}
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">🎉</div>
              <h3>Reservation Confirmed!</h3>
              <p>Thank you, <strong>{form.name}</strong>! We've received your booking for <strong>{form.date}</strong> at <strong>{form.time || '7:00 PM'}</strong> for <strong>{form.guests} guests</strong>.</p>
              <p>We'll send a confirmation to <strong>{form.email}</strong> shortly.</p>
              <button className="btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '1.5rem' }}>Make Another Booking</button>
            </div>
          ) : (
            <>
              <h3 className="form-title">Reserve Your Table</h3>
              <p className="form-subtitle">Fill in the details below and we'll confirm within 2 hours.</p>

              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Chukwuemeka Obi" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" />
                  </div>
                  <div className="form-group">
                    <label>Number of Guests</label>
                    <select name="guests" value={form.guests} onChange={handleChange}>
                      {['1','2','3','4','5','6','7','8','9','10+'].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred Date *</label>
                    <input name="date" type="date" value={form.date} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Preferred Time</label>
                    <select name="time" value={form.time} onChange={handleChange}>
                      <option value="">Select time</option>
                      {['12:00 PM','1:00 PM','2:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM'].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Occasion (optional)</label>
                  <select name="occasion" value={form.occasion} onChange={handleChange}>
                    <option value="">Select occasion</option>
                    {['Birthday','Anniversary','Business Dinner','Date Night','Family Gathering','Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Dietary requirements, seating preferences, allergy info..." />
                </div>
                <button className="btn-primary" style={{ width: '100%', padding: '1rem' }} onClick={handleSubmit}>
                  Confirm Reservation
                </button>
                <p className="form-note">* Required fields. Walk-ins also welcome, subject to availability.</p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
