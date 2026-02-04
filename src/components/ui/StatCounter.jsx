import { useEffect, useState, useRef } from "react";

const StatCounter = ({ end, suffix = "", prefix = "", label, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime;
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
        <div className={`text-4xl md:text-5xl font-bold mb-2 ${className}`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-primary-foreground/70 text-sm tracking-wider">{label}</p>
    </div>
  );
};

export default StatCounter;
