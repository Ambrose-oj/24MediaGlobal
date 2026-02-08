import { Link } from "react-router-dom";
import { ArrowRight, Palette, Share2, Video, Printer, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessStep from "@/components/ui/ProcessStep";

const services = [
  {
    id: "branding",
    icon: <Palette className="w-8 h-8" />,
    title: "Branding",
    subtitle: "Define Your Identity",
    description: "We help businesses stand out and build trust by creating a professional, cohesive brand that resonates with your audience.",
    features: [
      "Logo design and variations",
      "Color palette development",
      "Brand messaging and voice",
      "Visual direction and style guides",
      "Brand asset creation",
    ],
  },
  {
    id: "social-media",
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media Management",
    subtitle: "Grow Your Presence",
    description: "We manage your social media end-to-end, driving engagement, visibility, and growth so your brand connects with the right audience.",
    features: [
      "Content calendar planning",
      "Consistent posting and scheduling",
      "Community engagement",
      "Analytics and reporting",
      "Growth strategy execution",
    ],
  },
  {
    id: "content",
    icon: <Video className="w-8 h-8" />,
    title: "Content Creation",
    subtitle: "Captivate Your Audience",
    description: "We produce high-quality reels, graphics, and videos designed to engage, convert, and strengthen your brand presence.",
    features: [
      "Reels and short-form video",
      "Graphic design for social",
      "Video production and editing",
      "Photography direction",
      "Brand-aligned content strategy",
    ],
  },
  {
    id: "print",
    icon: <Printer className="w-8 h-8" />,
    title: "Custom Print Solutions",
    subtitle: "Bring Your Brand Offline",
    description: "We bring your brand to life offline with professional print solutions - business cards, banners, merchandise, and more—all aligned with your brand identity.",
    features: [
      "Business cards and stationery",
      "Roll-up banners and signage",
      "Event tags and materials",
      "Flyers and brochures",
      "Branded merchandise",
    ],
  },
];

const processSteps = [
  {
    title: "Discovery Call",
    description: "We understand your needs, goals, and challenges through an in-depth conversation.",
  },
  {
    title: "Proposal & Agreement",
    description: "We present service options tailored to your needs and confirm the scope of work.",
  },
  {
    title: "Onboarding",
    description: "You complete our questionnaire; we set clear timelines and expectations together.",
  },
  {
    title: "Execution",
    description: "We deliver your content, branding, social media management, or print services.",
  },
  {
    title: "Check-ins & Reporting",
    description: "Regular updates, feedback loops, and performance reviews to ensure quality.",
  },
  {
    title: "Delivery & Next Steps",
    description: "Final deliverables shared - we discuss ongoing support or retainer options.",
  },
];

const requirements = [
  {
    title: "Brand Information",
    description: "Existing logos, colors, style guides, or your brand vision if starting fresh.",
  },
  {
    title: "Goals & Objectives",
    description: "What you want to achieve with social media, content, or printing.",
  },
  {
    title: "Access & Accounts",
    description: "Social media login or admin access, email, website access if needed.",
  },
  {
    title: "Content & Assets",
    description: "Photos, videos, product info, or materials for campaigns.",
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-relaxed lg:leading-snug">
              Everything You Need to{" "}
              <span className="text-primary">Show Up Online</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 tracking-wide">
              From brand identity to content creation, social media management to print solutions - we handle it all so you can focus on running your business.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-32 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 tracking-wide">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-3xl bg-primary/20 flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            eyebrow="How It Works"
            title={<span className="text-brand-cream">Our Process</span>}
            description="A clear, streamlined journey from first contact to final delivery."
          />
          <div className="max-w-2xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={<span className="text-brand-cream">{step.title}</span>}
                description={step.description}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Getting Started"
            title="What We Need From You"
            description="To deliver the best results, here's what helps us hit the ground running."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{req.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Book a free discovery call and let's discuss which services are right for your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-brand-cream text-brand-black hover:bg-brand-black hover:text-brand-cream">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
