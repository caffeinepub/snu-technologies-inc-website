import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSubmitContactForm } from '../hooks/useQueries';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const submitMutation = useSubmitContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitMutation.mutateAsync({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        message: form.message,
      });
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      // error handled via mutation state
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-navy-light overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-0.5 gradient-teal-gold" />

      <div
        ref={ref}
        className="section-reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-teal border border-teal/30 rounded-sm mb-4">
            Contact Us
          </div>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl mb-4">
            Let's Build the{' '}
            <span className="text-gradient-teal-gold">Future Together.</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Ready to scale your tech team, modernize your infrastructure, or launch your next custom
            digital project? Reach out to the experts at SNU Technologies today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Company Info + Form */}
          <div className="space-y-8">
            {/* Company Details */}
            <div className="bg-navy border border-navy-border rounded-sm p-6">
              <h3 className="font-display font-700 text-lg text-foreground mb-2">SNU Technologies Inc.</h3>
              <p className="text-foreground/50 text-sm mb-6">
                Better yet, see us in person! We love our customers, so feel free to visit during normal business hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-sm text-foreground/80">208 Mt Park Blvd SW, Issaquah, WA 98027</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 uppercase tracking-wider mb-0.5">Phone</p>
                    <a href="tel:+16142857155" className="text-sm text-foreground/80 hover:text-teal transition-colors">
                      +1 614-285-7155
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:info@snutek.com" className="text-sm text-foreground/80 hover:text-teal transition-colors">
                      info@snutek.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-navy border border-navy-border rounded-sm p-6">
              <h3 className="font-display font-700 text-lg text-foreground mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle className="w-12 h-12 text-teal mb-4" />
                  <h4 className="font-display font-700 text-xl text-foreground mb-2">Message Sent!</h4>
                  <p className="text-foreground/60 text-sm mb-6">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 text-sm font-semibold rounded-sm border border-teal/40 text-teal hover:bg-teal/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground/50 uppercase tracking-wider mb-1.5">
                        Name <span className="text-teal">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 bg-navy-mid border border-navy-border rounded-sm text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-teal/60 focus:ring-1 focus:ring-teal/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/50 uppercase tracking-wider mb-1.5">
                        Email <span className="text-teal">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 bg-navy-mid border border-navy-border rounded-sm text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-teal/60 focus:ring-1 focus:ring-teal/30 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground/50 uppercase tracking-wider mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 bg-navy-mid border border-navy-border rounded-sm text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-teal/60 focus:ring-1 focus:ring-teal/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/50 uppercase tracking-wider mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 bg-navy-mid border border-navy-border rounded-sm text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-teal/60 focus:ring-1 focus:ring-teal/30 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/50 uppercase tracking-wider mb-1.5">
                      How can we help you? <span className="text-teal">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project or staffing needs..."
                      className="w-full px-4 py-2.5 bg-navy-mid border border-navy-border rounded-sm text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-teal/60 focus:ring-1 focus:ring-teal/30 transition-colors resize-none"
                    />
                  </div>

                  {submitMutation.isError && (
                    <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/30 rounded-sm text-sm text-destructive">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-sm gradient-teal-gold text-navy font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="rounded-sm overflow-hidden border border-navy-border h-[500px] lg:h-[700px]">
                <iframe
                  title="SNU Technologies Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.5!2d-122.0326!3d47.5301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c0000000001%3A0x1!2s208+Mt+Park+Blvd+SW%2C+Issaquah%2C+WA+98027!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 p-4 bg-navy border border-navy-border rounded-sm flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">SNU Technologies Inc.</p>
                  <p className="text-xs text-foreground/50">208 Mt Park Blvd SW, Issaquah, WA 98027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
