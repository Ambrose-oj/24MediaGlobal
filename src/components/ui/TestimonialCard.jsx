import { Quote } from "lucide-react";

const TestimonialCard = ({ quote, name, role, image }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 relative">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
      <p className="text-foreground leading-relaxed mb-6 relative z-10">"{quote}"</p>
      <div className="flex items-center gap-4">
        {image ? (
          <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold tracking-wide">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-foreground tracking-wide">{name}</h4>
          <p className="text-muted-foreground text-sm tracking-wide">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
