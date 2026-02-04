import { useEffect, useRef, useState } from "react";

const Ticker = ({ items, className = "" }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Quadruple items for seamless looping
  const duplicatedItems = [...items, ...items, ...items, ...items];

  useEffect(() => {
    if (contentRef.current) {
      // Get half the width since we duplicated content
      setContentWidth(contentRef.current.scrollWidth / 2);
    }
  }, [items]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden bg-secondary py-5 ${className}`}
    >
      <div 
        ref={contentRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: contentWidth > 0 ? `tickerScroll ${contentWidth / 120}s linear infinite` : 'none',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center flex-shrink-0 mx-8 text-secondary-foreground/80 text-sm font-medium uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-primary mr-4 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes tickerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Ticker;
