import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon, title, description, link = "/services" }) => {
  return (
    <Link
      to={link}
      className="group block p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground tracking-wide">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 tracking-wide">{description}</p>
      <span className="inline-flex items-center text-primary text-sm font-medium opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </span>
    </Link>
  );
};

export default ServiceCard;
