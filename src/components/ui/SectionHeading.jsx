import { forwardRef } from "react";

const SectionHeading = forwardRef(({
  eyebrow,
  title,
  description,
  centered = true,
  className = "",
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16 md:mb-20 ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed tracking-wide">
          {description}
        </p>
      )}
    </div>
  );
});

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
