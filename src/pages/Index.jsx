import { Link } from "react-router-dom";
import { ArrowRight, Palette, Share2, Video, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypeWriter from "@/components/ui/TypeWriter";
import Ticker from "@/components/ui/Ticker";
import ServiceCard from "@/components/ui/ServiceCard";
import StatCounter from "@/components/ui/StatCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessStep from "@/components/ui/ProcessStep";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import brandImage from "@/assets/brand-image.jpeg";

const tickerItems = [
  "Branding",
  "Social Media Management",
  "Content Creation",
  "Custom Print Solutions",
  "Strategy to Execution",
  "Professional Excellence",
  "Your Voice. Your Vision. Our Execution",
];

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Branding",
    description: "Define and express your identity with cohesive logos, colors, messaging, and visual direction.",
    link: "/services#branding",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Media Management",
    description: "End-to-end account management-content planning, posting, engagement, and growth.",
    link: "/services#social-media",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Content Creation",
    description: "High-quality reels, graphics, and videos tailored to engage your audience.",
    link: "/services#content",
  },
  {
    icon: <Printer className="w-6 h-6" />,
    title: "Custom Print Solutions",
    description: "Business cards, banners, merchandise, and more aligned with your brand identity.",
    link: "/services#print",
  },
];

const processSteps = [
  {
    title: "Discovery Call",
    description: "We understand your needs, goals, and challenges.",
  },
  {
    title: "Proposal & Agreement",
    description: "Present service options and confirm scope.",
  },
  {
    title: "Onboarding",
    description: "Client completes questionnaire; we set timelines and expectations.",
  },
  {
    title: "Execution",
    description: "Deliver content, branding, social media management, or print services.",
  },
  {
    title: "Check-ins & Reporting",
    description: "Regular updates, feedback loops, and performance reviews.",
  },
  {
    title: "Delivery & Next Steps",
    description: "Final deliverables shared - discuss ongoing support or retainer.",
  },
];

const testimonials = [
  {
    quote: "24Media Global gives every client such priority, it feels like you're their only one. The results speak for themselves - our engagement tripled in just 3 months.",
    name: "Amutadi.",
    role: "CEO, ShopTadi.",
  },
  {
    quote: "From 10k to 95K followers on Instagram! Their strategic approach and consistent execution transformed our online presence completely.",
    name: "Nino & Lulu.",
    role: "CEO, Lifestyle Brand.",
  },
  {
    quote: "Professional, creative, and reliable. They turned our brand vision into reality with branding and content that truly resonates with our audience.",
    name: "Amaka Eze.",
    role: "Creative Director, ShopJune.",
  },
];

const faqs = [
  {
    question: "What services does 24Media Global offer?",
    answer: "We offer branding, social media management, content creation, and custom print solutions - everything you need to build and maintain a strong online and offline presence.",
  },
  {
    question: "Who is 24Media Global best suited for?",
    answer: "Busy professionals, founders, CEOs, and creators who want a strong online presence without the stress of managing it themselves.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on scope - we'll provide clear estimates during our discovery call. Most projects range from a few days to several weeks.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "Brand information (logos, colors, vision), goals, account access, and any existing content or assets you'd like us to work with.",
  },
  {
    question: "Do you work with clients outside Nigeria?",
    answer: "Yes! We serve clients locally and internationally hence 'Global' in our name. We've worked with brands across multiple countries.",
  },
  {
    question: "How do I book a consultation?",
    answer: "Click the 'Book a Call' button anywhere on the site, or reach out via email at 24mediaglobal@gmail.com or WhatsApp at +234 916 749 0755.",
  },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-8 pb-16 bg-gradient-to-br from-background via-background to-muted">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                Creative Media Agency
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your Voice. Your Vision.{" "}
                <span className="text-primary">
                  <TypeWriter
                    words={["Our Execution.", "Our Strategy.", "Brought to Life.", "Visible Impact."]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseDuration={2500}
                  />
                </span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                We help busy professionals and growing brands show up clearly and consistently; turning your vision into results without the stress.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider">
                  <Link to="/contact">
                    Talk To Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:bg-brand-black hover:text-white">
                  <Link to="/portfolio">See Our Work</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative animate-scale-in">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl animate-pulse-glow" />
                <img
                  src={brandImage}
                  alt="24Media Global - Creative Agency"
                  className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker items={tickerItems} />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Do"
            title="Services That Drive Results"
            description="From brand identity to online presence, we handle everything so you can focus on what you do best."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Why 24Media Global"
                title={<span className="text-brand-cream tracking-wide">Strategy Meets Execution</span>}
                description={<span className="text-primary-foreground/70 tracking-wide mb-48">We don't just create - we deliver strategy, quality, and full execution that truly reflects your brand.</span>}
                centered={false}
              />
              <ul className="space-y-4 mb-8">
                {[
                  "Priority treatment - you'll feel like our only client",
                  "Full execution from strategy to delivery",
                  "Clear, consistent, and professional results",
                  "Local expertise with global standards",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-secondary-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <StatCounter end={30} suffix="+" label="Brands Supported" className="text-green-500" />
              <StatCounter end={5000} suffix="+" label="Content Assets Delivered" className="text-green-500" />
              <StatCounter end={1} suffix="M+" label="Digital Reach Across Platforms" className="text-green-500" />
              <StatCounter end={2} suffix="+" label="Years Building Visible Brands" className="text-green-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading className="text-green-500"
            eyebrow="Our Process"
            title="How We Work Together"
            description="A clear, streamlined journey from discovery to delivery."
          />
          <div className="max-w-2xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Client Love"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from brands we've helped grow."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="FAQ"
            title="Common Questions"
            description="Everything you need to know before getting started."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Ready to show up online -
            <span className="text-primary"> without the stress?</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-8 tracking-wide">
            Let's turn your vision into execution. Book a free discovery call and let's discuss how we can help your brand grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-brand-cream text-brand-black hover:bg-brand-black hover:text-brand-cream">
              <a href="https://wa.me/2349167490755" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
