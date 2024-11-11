import { useRef } from 'react';
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Projectss from './components/projectss/Projectss';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="App bg-black">
      <Navbar refs={{ homeRef, aboutRef, projectRef, contactRef }} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectRef}>
        <Projectss />
        <Testimonial />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
