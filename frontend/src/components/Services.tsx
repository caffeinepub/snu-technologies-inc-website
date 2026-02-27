import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: '/assets/generated/staffing-icon.dim_128x128.png',
    title: 'Staffing Solutions',
    accentColor: 'teal' as const,
    description:
      "In today's aggressive market, securing the right technical talent is your greatest competitive advantage. We specialize in comprehensive US IT staffing, offering unparalleled expertise in recruitment, bench sales, direct-hire, and contract-to-hire solutions. Our rigorous, tech-first vetting process ensures you get immediate access to top-tier professionals—from specialized developers to elite project managers—who seamlessly integrate into your corporate culture and are ready to deliver from day one.",
    highlights: ['Recruitment & Bench Sales', 'Direct-Hire Placement', 'Contract-to-Hire', 'Tech-First Vetting'],
  },
  {
    icon: '/assets/generated/managed-it-icon.dim_128x128.png',
    title: 'Managed IT Services',
    accentColor: 'gold' as const,
    description:
      'Focus on your core business objectives while we manage the complexities of your IT environment. SNU Technologies provides proactive, 24/7 managed services to ensure your infrastructure is secure, optimized, and highly available. From network monitoring and helpdesk support to disaster recovery and cloud management, we reduce your operational overhead and minimize downtime, ensuring your business runs at peak efficiency.',
    highlights: ['24/7 Network Monitoring', 'Helpdesk Support', 'Disaster Recovery', 'Cloud Management'],
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-24 bg-navy-light overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20 pointer-events-none" />

      <div
        ref={ref}
        className="section-reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-teal border border-teal/30 rounded-sm mb-4">
            What We Offer
          </div>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mb-4">
            Our <span className="text-gradient-teal-gold">Core Services</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Comprehensive IT solutions and workforce management designed to accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative bg-navy border rounded-sm p-8 transition-all duration-300 hover:shadow-card-hover ${
                service.accentColor === 'teal'
                  ? 'border-navy-border hover:border-teal/40'
                  : 'border-navy-border hover:border-gold/40'
              }`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-0.5 rounded-t-sm ${
                  service.accentColor === 'teal'
                    ? 'bg-gradient-to-r from-teal to-transparent'
                    : 'bg-gradient-to-r from-gold to-transparent'
                }`}
              />

              {/* Icon */}
              <div className="w-20 h-20 mb-6 rounded-sm overflow-hidden bg-navy-mid border border-navy-border p-2">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-display font-700 text-2xl text-foreground mb-4">{service.title}</h3>
              <p className="text-foreground/65 text-sm leading-relaxed mb-6">{service.description}</p>

              {/* Highlights */}
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className={`text-xs px-3 py-1.5 rounded-sm border font-medium ${
                      service.accentColor === 'teal'
                        ? 'border-teal/20 bg-teal/5 text-teal'
                        : 'border-gold/20 bg-gold/5 text-gold'
                    }`}
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all ${
                  service.accentColor === 'teal' ? 'text-teal' : 'text-gold'
                }`}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
