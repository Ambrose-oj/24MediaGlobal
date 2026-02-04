import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";

const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Brand Needs a Refresh",
    excerpt: "Is your brand still connecting with your audience? Here are the telltale signs it's time for a brand refresh and how to approach it strategically.",
    category: "Branding",
    author: "24Media Global",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Social Media Consistency",
    excerpt: "Consistency is key to social media success. Learn how to maintain a regular posting schedule without burning out.",
    category: "Social Media",
    author: "24Media Global",
    date: "Coming Soon",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Creating Content That Converts",
    excerpt: "Not all content is created equal. Discover the types of content that drive real engagement and business results.",
    category: "Content Creation",
    author: "24Media Global",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Why Busy Professionals Need a Media Partner",
    excerpt: "Time is your most valuable asset. Here's why delegating your online presence to experts makes business sense.",
    category: "Strategy",
    author: "24Media Global",
    date: "Coming Soon",
    readTime: "4 min read",
  },
];

const categories = [
  "All",
  "Branding",
  "Social Media",
  "Content Creation",
  "Strategy",
];

const Blog = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Insights &{" "}
              <span className="text-primary">Inspiration</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Tips, strategies, and insights to help you build a stronger brand and online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              >
                {/* Placeholder Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-primary font-semibold">{post.category}</span>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Coming Soon
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              More Content on the Way
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're preparing in-depth articles, guides, and resources to help you navigate the world of branding, content, and social media. Stay tuned!
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://instagram.com/24mediaglobal" target="_blank" rel="noopener noreferrer">
                Follow for Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Need help with your brand?
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Don't wait for our blog—book a call and let's discuss your specific needs today.
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

export default Blog;
