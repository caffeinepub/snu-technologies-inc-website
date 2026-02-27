import { MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none" />

      <div
        ref={ref}
        className="section-reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-gold border border-gold/30 rounded-sm mb-4">
            About Us
          </div>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl">
            The <span className="text-gradient-teal-gold">SNU Technologies</span> Story
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* About Me */}
          <div className="group relative bg-navy-light border border-navy-border rounded-sm p-8 hover:border-teal/40 transition-all duration-300 hover:shadow-card-hover">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal to-transparent rounded-t-sm" />
            <div className="w-12 h-12 rounded-sm bg-teal/10 border border-teal/20 flex items-center justify-center mb-6">
              <span className="font-display font-700 text-teal text-xl">01</span>
            </div>
            <h3 className="font-display font-700 text-xl text-foreground mb-4">About Me</h3>
            <p className="text-foreground/65 text-sm leading-relaxed">
              Technology is only as powerful as the minds behind it. SNU Technologies was founded on a
              singular vision: to disrupt the traditional IT consulting landscape by seamlessly aligning
              transformative technologies with the precise human capital required to drive them. My goal
              has always been to build a firm that goes beyond basic service delivery—we strive to be
              strategic growth partners, helping organizations optimize their operations, adopt next-gen
              tools, and secure the industry's top talent to maintain a competitive edge.
            </p>
          </div>

          {/* Who We Are */}
          <div className="group relative bg-navy-light border border-navy-border rounded-sm p-8 hover:border-gold/40 transition-all duration-300 hover:shadow-card-hover">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-transparent rounded-t-sm" />
            <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
              <span className="font-display font-700 text-gold text-xl">02</span>
            </div>
            <h3 className="font-display font-700 text-xl text-foreground mb-4">Who We Are</h3>
            <p className="text-foreground/65 text-sm leading-relaxed">
              SNU Technologies Inc. is a premier IT solutions and workforce management powerhouse. We
              specialize in engineering bespoke digital solutions and rapidly deploying highly specialized
              technical professionals across the United States. We don't just fill seats or write code;
              we partner with enterprise clients to architect scalable infrastructures, implement
              intelligent systems, and build high-performance agile teams. From robust Cloud architectures
              to specialized US IT staffing and recruitment, our core mission is your operational excellence.
            </p>
          </div>

          {/* Office Location */}
          <div className="group relative bg-navy-light border border-navy-border rounded-sm p-8 hover:border-teal/40 transition-all duration-300 hover:shadow-card-hover">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal via-gold to-transparent rounded-t-sm" />
            <div className="w-12 h-12 rounded-sm bg-teal/10 border border-teal/20 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-teal" />
            </div>
            <h3 className="font-display font-700 text-xl text-foreground mb-4">Office Location</h3>
            <p className="text-foreground/65 text-sm leading-relaxed mb-4">
              Headquartered in the vibrant tech hub of Washington state, our doors are always open to
              discuss your next big project or talent acquisition strategy.
            </p>
            <div className="mt-4 p-4 bg-navy-mid rounded-sm border border-navy-border">
              <p className="text-xs font-semibold text-teal uppercase tracking-wider mb-1">Headquarters</p>
              <p className="text-foreground/80 text-sm font-medium">208 Mt Park Blvd SW</p>
              <p className="text-foreground/80 text-sm font-medium">Issaquah, WA 98027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
