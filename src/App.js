
import { useEffect } from 'react';
import './App.css';
import Aos from "aos";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';



function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div>
        <Header />
        <About />
        <Service />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;
