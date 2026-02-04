import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Users, Sparkles, Clock, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/ui/SectionHeading";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const perks = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Learn & Grow",
    description: "Work on real projects with real clients and gain hands-on experience.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative Environment",
    description: "Be part of a team that values your input and supports your development.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Work",
    description: "We understand life happens - flexibility is built into how we work.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Portfolio Building",
    description: "Create work you'll be proud to showcase in your professional portfolio.",
  },
];

const openPositions = [
  {
    id: 1,
    title: "Social Media Intern",
    type: "Internship",
    location: "Remote / Lagos",
    description: "Assist with content scheduling, engagement, and reporting for our clients' social media accounts.",
    requirements: [
      "Strong understanding of social media platforms",
      "Basic graphic design skills (Canva is fine)",
      "Excellent written communication",
      "Eagerness to learn and grow",
    ],
  },
  {
    id: 2,
    title: "Content Creation Intern",
    type: "Internship",
    location: "Remote / Lagos",
    description: "Help create engaging reels, graphics, and video content for various brands.",
    requirements: [
      "Basic video editing skills",
      "Creative eye for visual content",
      "Familiarity with content trends",
      "Portfolio or samples preferred",
    ],
  },
  {
    id: 3,
    title: "Design Intern",
    type: "Internship",
    location: "Remote / Lagos",
    description: "Support branding projects with logo design, visual assets, and brand materials.",
    requirements: [
      "Proficiency in design tools (Figma, Canva, Adobe)",
      "Understanding of branding principles",
      "Strong attention to detail",
      "Portfolio required",
    ],
  },
];

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    portfolio: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_988ocpj';
    const templateId = 'template_erncb0o';
    const publicKey = 'LICXwR0zdL-UkTlfb';

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then(() => {
        toast({
          title: "Application Submitted!",
          description: "We'll review your application and get back to you soon.",
        });
        setFormData({ name: "", email: "", role: "", portfolio: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "There was an error sending your application. Please try again.",
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
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Join the <span className="text-primary">24Media Global</span> Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              We're building a team of passionate, creative individuals who share our commitment to excellence. Ready to grow with us?
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Culture"
                title="What It's Like to Work With Us"
                centered={false}
                className="mb-8"
              />
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed tracking-wide">
                <p>
                  At 24Media Global, we believe in <strong className="text-foreground">execution with excellence</strong>. We're not just building an agency - we're building a culture where creativity meets professionalism.
                </p>
                <p>
                  We value people who are reliable, creative, and hungry to learn. Whether you're just starting out or looking to grow your skills, we provide the environment and opportunities to thrive.
                </p>
                <p>
                  We work hard, support each other, and celebrate wins together. If that sounds like your kind of team, we'd love to hear from you.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {perk.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 tracking-wide">{perk.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Opportunities"
            description="We're currently looking for interns to join our growing team. More roles will open as we expand."
          />
          <div className="grid gap-6 max-w-4xl mx-auto">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/20 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 tracking-wide">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground tracking-wide">
                        <Briefcase className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground tracking-wide">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#apply"
                    className="text-primary font-medium text-sm hover:underline"
                  >
                    Apply Now →
                  </a>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 tracking-wide">
                  {position.description}
                </p>
                <div>
                  <h4 className="font-medium text-foreground mb-2 tracking-wide">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding scroll-mt-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Apply Now"
            title="Submit Your Application"
            description="Fill out the form below and we'll review your application."
          />
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
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
                <Label htmlFor="role">Position Interested In *</Label>
                <Input
                  id="role"
                  placeholder="e.g., Social Media Intern"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio / Resume Link</Label>
                <Input
                  id="portfolio"
                  placeholder="https://..."
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Why do you want to join 24Media Global? *</Label>
              <Textarea
                id="message"
                placeholder="Tell us about yourself and why you'd be a great fit..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  Sending...
                  <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                </>
              ) : (
                <>
                  Submit Application
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Don't see a role that fits?
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals. Send us your portfolio and let's chat about how you might fit into our growing team.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;