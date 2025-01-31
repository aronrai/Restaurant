import { menuItems } from '../data.js';

function Menu() {
  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>Rs {item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;