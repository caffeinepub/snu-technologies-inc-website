import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import About from './components/About';
import Services from './components/Services';
import CoreTechnologies from './components/CoreTechnologies';
import Development from './components/Development';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <About />
        <Services />
        <CoreTechnologies />
        <Development />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
