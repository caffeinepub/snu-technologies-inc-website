import { ArrowRight, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const contentRef = useScrollReveal<HTMLDivElement>(0.1);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/75" />
      {/* Circuit grid overlay */}
      <div className="absolute inset-0 circuit-bg opacity-40" />

      {/* Decorative teal line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 gradient-teal-gold" />

      {/* Content */}
      <div
        ref={contentRef}
        className="section-reveal relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          Next-Generation IT Solutions & Staffing
        </div>

        <h1 className="font-display font-700 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
          Empowering Enterprises with{' '}
          <span className="text-gradient-teal-gold">
            Next-Generation Technology
          </span>{' '}
          &amp; Elite IT Talent.
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed">
          SNU Technologies Inc. bridges the gap between complex digital transformation and business success.
          From cutting-edge Cloud and Gen AI solutions to strategic IT staffing, we deliver the expertise
          you need to scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#services')}
            className="group flex items-center gap-2 px-8 py-4 rounded-sm gradient-teal-gold text-navy font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-teal-glow"
          >
            Explore Our Solutions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="group flex items-center gap-2 px-8 py-4 rounded-sm border border-gold/60 text-gold font-semibold text-base hover:bg-gold/10 transition-all duration-200"
          >
            <Users className="w-4 h-4" />
            Hire Top Talent
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-navy-border pt-10">
          {[
            { value: '500+', label: 'Placements Made' },
            { value: '50+', label: 'Enterprise Clients' },
            { value: '10+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-700 text-2xl sm:text-3xl text-teal">{stat.value}</div>
              <div className="text-xs sm:text-sm text-foreground/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
