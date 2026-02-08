import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";

const caseStudies = [
  {
    id: 1,
    title: "Lifestyle Brand Instagram Growth",
    category: "Social Media Management",
    description: "Took a lifestyle brand from 0 to 19,000 Instagram followers through strategic content and community engagement.",
    metrics: { before: "0", after: "19K", label: "Followers" },
    tags: ["Instagram", "Content Strategy", "Community Growth"],
  },
  {
    id: 2,
    title: "YouTube Channel Launch",
    category: "Content Creation",
    description: "Launched and grew a YouTube channel from 300 to over 10,000 subscribers with consistent, quality content.",
    metrics: { before: "300", after: "10.3K", label: "Subscribers" },
    tags: ["YouTube", "Video Production", "Channel Strategy"],
  },
  {
    id: 3,
    title: "Beauty Brand Transformation",
    category: "Full Service",
    description: "Transformed a beauty brand's online presence from 20,000 to 165,000 followers through branding and content.",
    metrics: { before: "20K", after: "165K", label: "Followers" },
    tags: ["Branding", "Content Creation", "Social Media"],
  },
  {
    id: 4,
    title: "TikTok Growth Strategy",
    category: "Social Media Management",
    description: "Built a TikTok presence from scratch, reaching over 122,000 followers through viral content strategy.",
    metrics: { before: "0", after: "122K", label: "Followers" },
    tags: ["TikTok", "Viral Content", "Short-form Video"],
  },
];

const Portfolio = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Results That{" "}
              <span className="text-primary">Speak for Themselves</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              From zero to viral, see how we've helped brands grow their online presence with strategy and execution.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={30} suffix="+" label="Brands Supported" className="text-green-500" />
            <StatCounter end={5000} suffix="+" label="Content Assets Delivered" className="text-green-500" />
            <StatCounter end={1} suffix="M+" label="Digital Reach Across Platforms" className="text-green-500" />
            <StatCounter end={2} suffix="+" label="Years Building Visible Brands" className="text-green-500" />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Case Studies"
            title="Featured Projects"
            description="A look at some of our most impactful work and the results we've achieved for clients."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              >
                {/* Placeholder Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors" />
                  <div className="text-center z-10">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-2" />
                    <span className="text-primary font-semibold">{study.metrics.before} → {study.metrics.after}</span>
                    <p className="text-muted-foreground text-sm">{study.metrics.label}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                    {study.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Work Coming */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              More Coming Soon
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We're Curating More Case Studies
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're constantly working on exciting projects. Check back soon for more detailed case studies with before/after visuals and in-depth breakdowns of our process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://instagram.com/24mediaglobal" target="_blank" rel="noopener noreferrer">
                  Follow Our Work
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Want results like these?
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your brand achieve similar growth through strategic execution.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/contact">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
