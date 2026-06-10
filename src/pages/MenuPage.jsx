import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const menuData = {
  'Soups & Swallows': [
    { icon: '🥘', name: 'Egusi Soup', desc: 'Ground melon seeds, assorted meat, smoked fish, and fresh ede leaves in a rich palm oil base.', price: '₦4,500', origin: 'Yoruba', img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=70' },
    { icon: '🍲', name: 'Banga Soup', desc: 'Creamy palm nut extract soup with spiced dried fish, oburunbebe stick, and fragrant spices.', price: '₦5,200', origin: 'Delta', img: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?w=400&q=70' },
    { icon: '🫕', name: 'Ofe Onugbu', desc: 'Bitter leaf soup cooked low and slow with stockfish, crayfish, and cocoyam thickener.', price: '₦4,800', origin: 'Igbo', img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=70' },
    { icon: '🍠', name: 'Pounded Yam', desc: 'Smooth, stretchy pounded yam made from fresh white yam — the perfect swallow companion.', price: '₦1,200', origin: 'Pan-Nigeria', img: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?w=400&q=70' },
    { icon: '🌾', name: 'Amala & Ewedu', desc: 'Dark yam flour swallow served with silky ewedu draw soup and rich gbegiri bean soup.', price: '₦3,800', origin: 'Yoruba', img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=70' },
    { icon: '🐟', name: 'Pepper Soup', desc: 'Spiced catfish broth with utazi leaves, uziza, and a signature blend of native pepper seeds.', price: '₦5,500', origin: 'South-South', img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=70' },
  ],
  'Grills': [
    { icon: '🍢', name: 'Suya Skewers', desc: 'Spiced beef skewers grilled over open flame, served with sliced onions and tomatoes.', price: '₦3,500', origin: 'North', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=70' },
    { icon: '🍗', name: 'Nkwobi Wings', desc: 'Cow foot stewed in palm oil and uziza leaves — a beloved Eastern classic, reimagined as wings.', price: '₦4,200', origin: 'Igbo', img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c2?w=400&q=70' },
    { icon: '🔥', name: 'Asun (Goat)', desc: 'Smoked and spiced goat meat, grilled to perfection with peppers, onions, and native spices.', price: '₦5,000', origin: 'Yoruba', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=70' },
    { icon: '🐠', name: 'Grilled Tilapia', desc: 'Whole tilapia marinated in ata rodo paste and grilled with herbs and spiced butter.', price: '₦6,500', origin: 'Pan-Nigeria', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=70' },
  ],
  'Plates': [
    { icon: '🍚', name: 'Party Jollof Rice', desc: 'Smoky tomato-based rice cooked in the legendary party style — firewood flavour, premium cuts.', price: '₦3,200', origin: 'Pan-Nigeria', img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=70' },
    { icon: '🫘', name: 'Moi Moi Royale', desc: 'Steamed bean pudding stuffed with boiled egg, corned beef, and crayfish. Wrapped in leaves.', price: '₦1,800', origin: 'Pan-Nigeria', img: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?w=400&q=70' },
    { icon: '🍛', name: 'Asaro (Yam Porridge)', desc: 'Spiced yam porridge slow-cooked in palm oil with smoked fish, crayfish, and fresh pepper.', price: '₦2,800', origin: 'Yoruba', img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=70' },
    { icon: '🥗', name: 'Abacha Salad', desc: 'Shredded cassava tossed in ugba, garden eggs, ponmo, and a vibrant spiced palm oil dressing.', price: '₦2,500', origin: 'Igbo', img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=70' },
  ],
  'Drinks': [
    { icon: '🥤', name: 'Zobo Royale', desc: 'Chilled hibiscus drink infused with ginger, cloves, pineapple, and a hint of orange peel.', price: '₦1,000', origin: 'North', img: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=70' },
    { icon: '🌿', name: 'Kunu Aya', desc: 'Smooth tigernut milk blended with dates and coconut — naturally sweet and nourishing.', price: '₦1,200', origin: 'North', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=70' },
    { icon: '🍍', name: 'Pineapple Ginger Punch', desc: 'Fresh pineapple juice pressed daily with raw ginger and a pinch of turmeric.', price: '₦1,500', origin: 'Pan-Nigeria', img: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=70' },
    { icon: '🍺', name: 'Chapman', desc: 'The classic Nigerian party drink — grenadine, Fanta, Sprite, cucumber, and crushed ice.', price: '₦1,400', origin: 'Lagos', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=70' },
  ],
};

const tabs = Object.keys(menuData);

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="page">
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&q=80')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="page-hero-label">What We Serve</p>
          <h1 className="page-hero-title">Our <em>Menu</em></h1>
        </div>
      </div>

      <section className="page-section menu-page-section">
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

        <div className="menu-page-grid">
          {menuData[activeTab].map((item) => (
            <div className="menu-page-card" key={item.name}>
              <div className="menu-page-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="menu-page-info">
                <div className="menu-page-header">
                  <h3>{item.name}</h3>
                  <span className="origin-tag">{item.origin}</span>
                </div>
                <p>{item.desc}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <h2>Ready to Order?</h2>
        <p>Book a table and experience these dishes fresh from our kitchen.</p>
        <Link to="/contact" className="btn-primary">Book a Table</Link>
      </section>
    </div>
  );
}
