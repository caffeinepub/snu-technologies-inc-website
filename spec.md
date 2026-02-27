# Specification

## Summary
**Goal:** Build the SNU Technologies Inc. corporate website as a single-page application with a dark navy/teal/gold design theme, multiple content sections, a contact form wired to a Motoko backend canister, and all custom image assets rendered throughout.

**Planned changes:**
- Apply global design theme: dark navy/charcoal backgrounds, electric teal and gold accents, bold sans-serif typography, subtle grid/circuit-board texture overlays, and scroll-reveal animations
- Build sticky navbar with logo/wordmark, section links (Home, About, Services, Core Technologies, Development, Clients, Contact Us), scroll-based background blur, and mobile hamburger menu
- Build full-width Hero section with headline, sub-headline, two CTA buttons (scroll to Services / Contact), and hero background image
- Build Introduction section with heading, body text, and abstract technology illustration
- Build About section (id="about") with three subsections: "About Me", "Who We Are", and "Office Location" (208 Mt Park Blvd SW, Issaquah, WA 98027)
- Build Services section (id="services") with two cards: "Staffing Solutions" and "Managed IT Services", each with icon, heading, and body text
- Build Core Technologies section with 7 responsive tiles (Cyber Security, Blockchain Management, ServiceNow, Guidewire, Scrum Master/PO/PM, Gen AI/MLOps/AI-ML, Cloud Technologies), each with icon and description
- Build Development section with heading, body text, and code/development illustration
- Build Clients section with heading, supporting paragraph, and auto-playing grayscale-to-color hover carousel of 6 placeholder client logos
- Build Contact Us section (id="contact") with company details (address, phone, email), a 5-field contact form (Name, Email, Phone, Company, Message), submit button, and embedded Google Maps iframe for 208 Mt Park Blvd SW, Issaquah, WA 98027; form and map side-by-side on desktop
- Build site footer with company name, address, phone, email, and copyright "© 2024 SNU Technologies Inc. All rights reserved."
- Implement Motoko backend: stable `submitContactForm(name, email, phone, company, message) : async Bool` and query `getContactSubmissions() : async [ContactSubmission]`
- Wire frontend contact form to call `submitContactForm` canister method; show loading state, success confirmation, or error message; clear form on success
- Render all custom image assets from `/assets/generated/` in their respective sections

**User-visible outcome:** Visitors can browse a fully themed SNU Technologies corporate website, explore service and technology offerings, view company information, and submit a contact inquiry that is persisted on-chain via the Motoko canister.
