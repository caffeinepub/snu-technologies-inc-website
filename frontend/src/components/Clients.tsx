import { useScrollReveal } from '../hooks/useScrollReveal';

const clientLogos = [
  '/assets/generated/client-logo-1.dim_200x80.png',
  '/assets/generated/client-logo-2.dim_200x80.png',
  '/assets/generated/client-logo-3.dim_200x80.png',
  '/assets/generated/client-logo-1.dim_200x80.png',
  '/assets/generated/client-logo-2.dim_200x80.png',
  '/assets/generated/client-logo-3.dim_200x80.png',
];

// Duplicate for seamless loop
const allLogos = [...clientLogos, ...clientLogos];

export default function Clients() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="clients" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20 pointer-events-none" />

      <div
        ref={ref}
        className="section-reveal relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-teal border border-teal/30 rounded-sm mb-4">
            Our Clients
          </div>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mb-4">
            Trusted by <span className="text-gradient-teal-gold">Innovators.</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            We are proud to be the driving force behind the technological and workforce success of leading
            enterprises across diverse industries—from finance and healthcare to retail and technology.
            Our clients trust us to deliver the talent and the tech that keep them ahead of the curve.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll-left gap-8 w-max py-4">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-48 h-20 bg-navy-light border border-navy-border rounded-sm overflow-hidden flex items-center justify-center p-4 hover:border-teal/40 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Client logo ${(index % clientLogos.length) + 1}`}
                  className="max-w-full max-h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 'Finance', label: 'Banking & Finance' },
              { value: 'Healthcare', label: 'Healthcare & Life Sciences' },
              { value: 'Retail', label: 'Retail & E-Commerce' },
              { value: 'Technology', label: 'Technology & SaaS' },
            ].map((industry) => (
              <div
                key={industry.value}
                className="text-center p-4 bg-navy-light border border-navy-border rounded-sm"
              >
                <div className="font-display font-700 text-teal text-lg mb-1">{industry.value}</div>
                <div className="text-xs text-foreground/50">{industry.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
