import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle } from 'lucide-react';

const pillars = [
  'Agility & Speed to Market',
  'Enterprise-Grade Security',
  'AI-Driven Intelligence',
  'Top-Tier Technical Talent',
];

export default function Introduction() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 bg-navy-light circuit-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/60 pointer-events-none" />

      <div
        ref={ref}
        className="section-reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-teal border border-teal/30 rounded-sm mb-4">
              Our Mission
            </div>
            <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Driving Innovation,{' '}
              <span className="text-gradient-teal-gold">Delivering Excellence.</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              At SNU Technologies, we understand that modern businesses run on agility, security, and
              intelligence. Whether you are looking to secure your digital assets, automate workflows
              with AI, or build a robust team of tech professionals, we are your trusted partner in
              navigating the digital landscape.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-lg bg-teal/5 blur-2xl" />
            <div className="relative rounded-lg overflow-hidden border border-navy-border">
              <img
                src="/assets/generated/intro-illustration.dim_800x500.png"
                alt="Technology innovation illustration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent pointer-events-none" />
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-teal/50 rounded-tr-sm" />
            <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-gold/50 rounded-bl-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
