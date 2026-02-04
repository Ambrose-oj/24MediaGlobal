import { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "Send us an email anytime",
    value: "24mediaglobal@gmail.com",
    href: "mailto:24mediaglobal@gmail.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    value: "+234 916 749 0755",
    href: "tel:+2349167490755",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    description: "Chat with us directly",
    value: "Send a message",
    href: "https://wa.me/2349167490755",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    description: "Based in Nigeria",
    value: "Lagos, Nigeria",
    href: "#",
  },
];

const faqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer: "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, WhatsApp is the fastest way to reach us.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! Our discovery call is completely free. It's an opportunity for us to understand your needs and for you to learn how we can help.",
  },
  {
    question: "Can you work with clients outside Nigeria?",
    answer: "Absolutely! We work with clients globally. Our communication tools and processes are set up for seamless remote collaboration.",
  },
  {
    question: "How do payments work?",
    answer: "We typically require a deposit to begin work, with the balance due upon completion. We accept bank transfers and can discuss payment plans for larger projects.",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Added loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // My actual strings from the dashboard
    const serviceId = 'service_988ocpj';
    const templateId = 'template_hx9n5xd';
    const publicKey = 'LICXwR0zdL-UkTlfb';

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "We've received your inquiry and will reach out within 24-48 hours.",
        });
        // Clear the form only on success
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          variant: "destructive",
          title: "Sending Failed",
          description: "Something went wrong. Please try again or message us on WhatsApp.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Start a{" "}
              <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Ready to elevate your brand? We'd love to hear from you. Reach out and let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 border-b border-border">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {method.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                <span className="text-primary font-medium text-sm">{method.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Booking */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeading
                eyebrow="Send a Message"
                title="Contact Form"
                description="Fill out the form and we'll get back to you within 24-48 hours."
                centered={false}
                className="mb-8"
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-company">Company / Brand Name</Label>
                    <Input
                      id="contact-company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-service">Service Interested In</Label>
                  <Input
                    id="contact-service"
                    placeholder="e.g., Social Media Management, Branding"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Your Message *</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us about your project and how we can help..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting} // Disable while sending
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Booking Section */}
            <div>
              <SectionHeading
                eyebrow="Book a Call"
                title="Schedule a Discovery Call"
                description="Prefer to talk? Book a free 30-minute discovery call and let's discuss your project."
                centered={false}
                className="mb-8"
              />
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Free Discovery Call</h3>
                    <p className="text-muted-foreground text-sm">30 minutes • Video or Phone</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In this call, we'll discuss your goals, challenges, and how 24Media Global can help you achieve your vision. No obligation, just a conversation.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Understand your current situation",
                    "Identify your goals and challenges",
                    "Explore how we can help",
                    "Get clear next steps",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <a
                    href="https://calendly.com/24mediaglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Your Free Call
                    <Calendar className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <p className="text-muted-foreground text-xs text-center mt-4">
                  *Calendly link will be updated with actual booking page
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions Before Reaching Out?"
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Based in Lagos, Serving Globally
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            While we're headquartered in Lagos, Nigeria, we work with clients around the world. Distance is never a barrier to great work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="mailto:24mediaglobal@gmail.com">
                Email Us Now
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-brand-cream text-brand-black hover:bg-brand-black hover:text-brand-cream">
              <a href="https://wa.me/2349167490755" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;