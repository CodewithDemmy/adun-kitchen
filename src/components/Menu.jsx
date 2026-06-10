import { useState } from 'react';
import './Menu.css';

const menuData = {
  'Soups & Swallows': [
    { icon: '🥘', name: 'Egusi Soup', desc: 'Ground melon seeds, assorted meat, smoked fish, and fresh ede leaves in a rich palm oil base.', price: '₦4,500', origin: 'Yoruba' },
    { icon: '🍲', name: 'Banga Soup', desc: 'Creamy palm nut extract soup with spiced dried fish, oburunbebe stick, and fragrant spices.', price: '₦5,200', origin: 'Delta' },
    { icon: '🫕', name: 'Ofe Onugbu', desc: 'Bitter leaf soup cooked low and slow with stockfish, crayfish, and cocoyam thickener.', price: '₦4,800', origin: 'Igbo' },
    { icon: '🍠', name: 'Pounded Yam', desc: 'Smooth, stretchy pounded yam made from fresh white yam — the perfect swallow companion.', price: '₦1,200', origin: 'Pan-Nigeria' },
    { icon: '🌾', name: 'Amala & Ewedu', desc: 'Dark yam flour swallow served with silky ewedu draw soup and rich gbegiri bean soup.', price: '₦3,800', origin: 'Yoruba' },
    { icon: '🐟', name: 'Pepper Soup', desc: 'Spiced catfish broth with utazi leaves, uziza, and a signature blend of native pepper seeds.', price: '₦5,500', origin: 'South-South' },
  ],
  'Grills': [
    { icon: '🍢', name: 'Suya Skewers', desc: 'Spiced beef skewers grilled over open flame, served with sliced onions and tomatoes.', price: '₦3,500', origin: 'North' },
    { icon: '🍗', name: 'Nkwobi Wings', desc: 'Cow foot stewed in palm oil and uziza leaves — a beloved Eastern classic, reimagined as wings.', price: '₦4,200', origin: 'Igbo' },
    { icon: '🔥', name: 'Asun (Goat)', desc: 'Smoked and spiced goat meat, grilled to perfection with peppers, onions, and native spices.', price: '₦5,000', origin: 'Yoruba' },
    { icon: '🐠', name: 'Grilled Tilapia', desc: 'Whole tilapia marinated in ata rodo paste and grilled with herbs and spiced butter.', price: '₦6,500', origin: 'Pan-Nigeria' },
  ],
  'Plates': [
    { icon: '🍚', name: 'Party Jollof Rice', desc: 'Smoky tomato-based rice cooked in the legendary party style — firewood flavour, premium cuts.', price: '₦3,200', origin: 'Pan-Nigeria' },
    { icon: '🫘', name: 'Moi Moi Royale', desc: 'Steamed bean pudding stuffed with boiled egg, corned beef, and crayfish. Wrapped in leaves.', price: '₦1,800', origin: 'Pan-Nigeria' },
    { icon: '🍛', name: 'Asaro (Yam Porridge)', desc: 'Spiced yam porridge slow-cooked in palm oil with smoked fish, crayfish, and fresh pepper.', price: '₦2,800', origin: 'Yoruba' },
    { icon: '🥗', name: 'Abacha Salad', desc: 'Shredded cassava tossed in ugba, garden eggs, ponmo, and a vibrant spiced palm oil dressing.', price: '₦2,500', origin: 'Igbo' },
  ],
  'Drinks': [
    { icon: '🥤', name: 'Zobo Royale', desc: 'Chilled hibiscus drink infused with ginger, cloves, pineapple, and a hint of orange peel.', price: '₦1,000', origin: 'North' },
    { icon: '🌿', name: 'Kunu Aya', desc: 'Smooth tigernut milk blended with dates and coconut — naturally sweet and nourishing.', price: '₦1,200', origin: 'North' },
    { icon: '🍍', name: 'Pineapple Ginger Punch', desc: 'Fresh pineapple juice pressed daily with raw ginger and a pinch of turmeric.', price: '₦1,500', origin: 'Pan-Nigeria' },
    { icon: '🍺', name: 'Chapman', desc: 'The classic Nigerian party drink — grenadine, Fanta, Sprite, cucumber, and crushed ice.', price: '₦1,400', origin: 'Lagos' },
  ],
};

const tabs = Object.keys(menuData);

export default function Menu() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="menu" id="menu">
      <div className="menu-header">
        <p className="section-label">The Menu</p>
        <h2 className="section-title">Bold Flavours, <em>Proudly Nigerian</em></h2>
      </div>

      <div className="menu-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {menuData[activeTab].map((item) => (
          <div className="menu-card" key={item.name}>
            <div className="menu-card-icon">{item.icon}</div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div className="menu-card-footer">
              <span className="price">{item.price}</span>
              <span className="origin-tag">{item.origin}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
