import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import brandImage from "@/assets/brand-image.jpeg";

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence-Driven",
    description: "We raise the standard of execution and professionalism in everything we do.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategic",
    description: "Every action is backed by strategy, ensuring your brand moves with purpose.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Reliable",
    description: "We deliver what we promise, when we promise - consistency you can count on.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Creative",
    description: "We bring fresh perspectives and innovative solutions to every project.",
  },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                We Turn Vision Into{" "}
                <span className="text-primary">Execution</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 tracking-wide">
                24Media Global exists to help busy professionals and growing brands show up clearly and consistently through strategic branding, content creation, social media management, and custom printing solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed tracking-wide">
                We're not just another agency - we're your execution partner, turning your vision into results.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
              <img
                src={brandImage}
                alt="24Media Global Team"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Our Story"
              title="Born From a Simple Idea"
              centered={false}
              className="mb-8"
            />
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed tracking-wide">
              <p>
                <strong className="text-foreground">24Media Global was founded in November 2024</strong> - hence the "24" in our name. The "Global" reflects our belief that great work knows no borders; we cater to clients both locally in Nigeria and internationally.
              </p>
              <p>
                We started with a clear mission: to help busy business owners, creators, and professionals build a strong online presence without the stress of managing it themselves.
              </p>
              <p>
                Too many talented professionals were struggling with inconsistent branding, overwhelming content demands, and the constant pressure to "show up" online. We saw an opportunity to bridge the gap between vision and execution - and 24Media Global was born.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                eyebrow="Our Vision"
                title={<span className="text-brand-cream">Where We're Headed</span>}
                centered={false}
                className="mb-8"
              />
              <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-6 tracking-wide">
                In 3 - 5 years, 24Media Global will be the go-to agency for busy professionals and brands looking for strategic, reliable execution.
              </p>
              <ul className="space-y-4">
                {[
                  "Running on retainers with a skilled, growing team",
                  "Clear systems and proven, repeatable results",
                  "An educational arm to develop new talent",
                  "Industry-leading standards of professionalism",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-secondary-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Mission"
                title={<span className="text-brand-cream">What Drives Us</span>}
                centered={false}
                className="mb-8"
              />
              <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-6 tracking-wide">
                To help busy professionals and growing brands show up clearly and consistently through strategic branding, content creation, social media management, and custom printing solutions - turning their vision into execution.
              </p>
              <p className="text-secondary-foreground/80 text-lg leading-relaxed tracking-wide">
                Our goal in the creative media industry is simple: <strong className="text-secondary-foreground">to raise the standard of execution and professionalism.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="If 24Media Global were a person, we'd be professional, reliable, with a relatable approach that makes clients feel seen and understood."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-wide">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Inspiration"
              title="Brands We Admire"
            />
            <p className="text-muted-foreground text-lg leading-relaxed tracking-wide">
              We admire <strong className="text-foreground">Rage Media</strong> for their excellence and innovation. They set the standard for what's possible in creative media, and they inspire us to push boundaries while maintaining the highest level of quality and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="The Team"
            title="People Behind the Brand"
            description="We're a lean-focused team dedicated to delivering exceptional results for every client."
          />
          <div className="max-w-lg mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <span className="text-3xl font-bold">24</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-wide">Growing Team</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 tracking-wide">
                We've built a network of skilled contractors and collaborators who share our commitment to excellence. As we grow, we're building a core team that embodies our values.
              </p>
              <Button asChild variant="outline">
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Ready to work with us?
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-8 tracking-wide">
            Let's discuss how 24Media Global can help your brand show up online - clearly, consistently, and professionally.
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

export default About;
