import { Zap, MapPin, Phone, Mail, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Development', href: '#development' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'snu-technologies');

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy border-t border-navy-border overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-0.5 gradient-teal-gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm gradient-teal-gold flex items-center justify-center">
                <Zap className="w-5 h-5 text-navy" />
              </div>
              <span className="font-display font-700 text-xl text-foreground">
                SNU<span className="text-teal"> Technologies</span>
              </span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed mb-6">
              Premier IT solutions and workforce management powerhouse. Engineering bespoke digital
              solutions and deploying specialized technical professionals across the United States.
            </p>
            <div className="flex items-center gap-2 text-xs text-foreground/30">
              <span>Built with</span>
              <Heart className="w-3 h-3 text-teal fill-teal" />
              <span>using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-light transition-colors"
              >
                caffeine.ai
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-widest text-foreground/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-foreground/60 hover:text-teal transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-widest text-foreground/40 mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/60">208 Mt Park Blvd SW, Issaquah, WA 98027</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                <a href="tel:+16142857155" className="text-sm text-foreground/60 hover:text-teal transition-colors">
                  +1 614-285-7155
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal flex-shrink-0" />
                <a href="mailto:info@snutek.com" className="text-sm text-foreground/60 hover:text-teal transition-colors">
                  info@snutek.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/30">
            © {year} SNU Technologies Inc. All rights reserved.
          </p>
          <p className="text-xs text-foreground/30">
            Issaquah, WA · United States
          </p>
        </div>
      </div>
    </footer>
  );
}
