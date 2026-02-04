import { forwardRef } from "react";

const ProcessStep = forwardRef(({ number, title, description, isLast = false }, ref) => {
  return (
    <div ref={ref} className="relative flex gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-border mt-4" />
        )}
      </div>
      
      {/* Content */}
      <div className={`pb-12 ${isLast ? 'pb-0' : ''}`}>
        <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed tracking-wide">{description}</p>
      </div>
    </div>
  );
});

ProcessStep.displayName = "ProcessStep";

export default ProcessStep;
