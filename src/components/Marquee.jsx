import './Marquee.css';

const items = [
  'Egusi Soup', 'Jollof Rice', 'Suya Skewers', 'Ofe Onugbu',
  'Pounded Yam', 'Banga Soup', 'Asaro', 'Moi Moi', 'Pepper Soup',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
