import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-methods">
        <div className="contact-item">
          <FaPhone />
          <span>+91 9564120965</span>
        </div>
        <div className="contact-item">
          <FaEnvelope />
          <span>aron.dumi.rai@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaWhatsapp />
          <span>+91 9564120965</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;