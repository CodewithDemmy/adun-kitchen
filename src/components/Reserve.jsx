import { useState } from 'react';
import './Reserve.css';

export default function Reserve() {
  const [form, setForm] = useState({ name: '', date: '', guests: '2 guests' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.name && form.date) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: '', date: '', guests: '2 guests' });
    }
  };

  return (
    <section className="reserve" id="reserve">
      <p className="section-label" style={{ justifyContent: 'center' }}>Reservations</p>
      <h2 className="section-title">
        Reserve Your <em>Table Tonight</em>
      </h2>
      <p className="reserve-desc">Join us for an unforgettable evening. Walk-ins welcome, reservations preferred.</p>

      {submitted ? (
        <div className="reserve-success">
          🎉 Table reserved! We look forward to welcoming you, {form.name || 'our guest'}.
        </div>
      ) : (
        <div className="reserve-form">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
          <select name="guests" value={form.guests} onChange={handleChange}>
            <option>2 guests</option>
            <option>3 guests</option>
            <option>4 guests</option>
            <option>5+ guests</option>
          </select>
          <button className="btn-primary" onClick={handleSubmit}>Reserve Now</button>
        </div>
      )}
    </section>
  );
}
