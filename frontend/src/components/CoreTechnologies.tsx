import { useScrollReveal } from '../hooks/useScrollReveal';

const technologies = [
  {
    icon: '/assets/generated/cybersecurity-icon.dim_96x96.png',
    name: 'Cyber Security',
    description:
      'Safeguard your enterprise with proactive threat intelligence, Zero Trust architecture, and comprehensive vulnerability management to protect your critical data assets against evolving digital threats.',
  },
  {
    icon: '/assets/generated/blockchain-icon.dim_96x96.png',
    name: 'Blockchain Management',
    description:
      'Build trust and transparency. We design and implement decentralized, immutable blockchain solutions tailored for secure transactions, supply chain tracking, and smart contracts.',
  },
  {
    icon: '/assets/generated/servicenow-icon.dim_96x96.png',
    name: 'ServiceNow',
    description:
      'Transform your IT Service Management (ITSM). We implement and customize ServiceNow platforms to automate enterprise workflows, break down departmental silos, and elevate user experiences.',
  },
  {
    icon: '/assets/generated/guidewire-icon.dim_96x96.png',
    name: 'Guidewire',
    description:
      'Delivering agile, robust core system solutions specifically tailored for the Property and Casualty (P&C) insurance industry, ensuring faster time-to-market for new products.',
  },
  {
    icon: '/assets/generated/agile-icon.dim_96x96.png',
    name: 'Scrum Master / Product Owner / Project & Program Manager',
    description:
      'Drive successful project execution with our certified Agile leaders. We provide the strategic oversight needed to ensure rapid delivery, strict alignment with business goals, and seamless team orchestration.',
  },
  {
    icon: '/assets/generated/ai-ml-icon.dim_96x96.png',
    name: 'Gen AI, MLOps & AI/ML',
    description:
      'Turn your data into a predictive powerhouse. We build, train, and deploy intelligent Large Language Models (LLMs) and Machine Learning algorithms that automate complex processes, enhance decision-making, and unlock new revenue streams.',
  },
  {
    icon: '/assets/generated/cloud-icon.dim_96x96.png',
    name: 'Cloud Technologies',
    description:
      'Architect, migrate, and optimize your infrastructure. We provide scalable, secure, and cost-effective cloud solutions across AWS, Microsoft Azure, and Google Cloud Platform (GCP).',
  },
];

export default function CoreTechnologies() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="technologies" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-25 pointer-events-none" />

      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className="section-reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-gold border border-gold/30 rounded-sm mb-4">
            Core Technologies
          </div>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mb-4">
            Powering Your{' '}
            <span className="text-gradient-teal-gold">Digital Future</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            We leverage the industry's most powerful tools and methodologies to future-proof your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-navy-light border border-navy-border rounded-sm p-6 hover:border-teal/40 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal to-gold group-hover:w-full transition-all duration-500 rounded-t-sm" />

              {/* Icon */}
              <div className="w-14 h-14 mb-4 rounded-sm overflow-hidden bg-navy-mid border border-navy-border p-1.5 group-hover:border-teal/30 transition-colors">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-display font-600 text-base text-foreground mb-3 leading-tight group-hover:text-teal transition-colors">
                {tech.name}
              </h3>
              <p className="text-foreground/55 text-xs leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
