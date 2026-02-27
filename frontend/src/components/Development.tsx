import { useScrollReveal } from '../hooks/useScrollReveal';
import { Code2, Layers, Rocket, RefreshCw } from 'lucide-react';

const features = [
  { icon: Code2, label: 'Full-Stack Engineering' },
  { icon: Layers, label: 'Modern Frameworks' },
  { icon: Rocket, label: 'Rapid Deployment' },
  { icon: RefreshCw, label: 'Continuous Support' },
];

export default function Development() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="development" className="relative py-24 bg-navy-light overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20 pointer-events-none" />

      <div
        ref={ref}
        className="section-reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-lg bg-gold/5 blur-2xl" />
            <div className="relative rounded-sm overflow-hidden border border-navy-border">
              <img
                src="/assets/generated/development-illustration.dim_800x500.png"
                alt="Custom software development illustration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-navy/40 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-gold/50 rounded-tl-sm" />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-teal/50 rounded-br-sm" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-teal border border-teal/30 rounded-sm mb-4">
              Development
            </div>
            <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Custom Software{' '}
              <span className="text-gradient-teal-gold">Engineered for Scale</span>{' '}
              and Performance.
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed mb-8">
              Off-the-shelf software rarely fits the unique contours of an innovative business. At SNU
              Technologies, our full-stack development teams build bespoke applications engineered for
              your specific needs. From intuitive front-end user experiences to complex, secure back-end
              architectures, we utilize modern frameworks to create high-performance web, mobile, and
              enterprise software. We manage the entire software development lifecycle (SDLC), ensuring
              rapid deployment, seamless integration with your existing systems, and continuous
              post-launch support.
            </p>

            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-3">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 bg-navy rounded-sm border border-navy-border"
                >
                  <div className="w-8 h-8 rounded-sm bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-teal" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
