import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Social() {
  return (
    <section className="social">
      <h2>Follow Us</h2>
      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>
    </section>
  );
}

export default Social;