import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Social from './components/Social';
import Footer from './components/Footer';
// import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
        <Social />
        <Footer />
      </main>
    </>
  );
}

export default App;