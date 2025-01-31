import { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-container">
        <h1 className="logo">TNP</h1>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;